import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import styles from './StarsRatingBar.st.css';
import {
  dataHooks,
  starIndexes,
  starRatingBarSizes,
  starRatingBarSizesInPx,
} from './constants';
import StarFilledIcon from 'wix-ui-icons-common/StarFilled';
import StarIcon from 'wix-ui-icons-common/Star';

/** Star Rating Component  */
class StarsRatingBar extends React.PureComponent {
  constructor(props) {
    super(props);

    const starsRatingBarSize = this._getStarsRatingBarSize();

    this.state = {
      starsRatingBarSize,
      hoveredStarIndex: 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.size !== this.props.size) {
      const starsRatingBarSize = this._getStarsRatingBarSize();
      this.setState({ starsRatingBarSize });
    }
  }

  _getStarsRatingBarSize = () => {
    const { readOnly } = this.props;

    return readOnly
      ? this._getReadOnlyModeStarsSize()
      : this._getInteractiveModeStarsSize();
  };

  _getReadOnlyModeStarsSize = () => {
    const { size } = this.props;
    return size ? size : starRatingBarSizes.medium;
  };

  _getInteractiveModeStarsSize = () => {
    const { size } = this.props;
    if (size && size !== starRatingBarSizes.large) {
      throw new Error(
        `The size ${size} is not valid. In interactive mode the size must be 'large'.`,
      );
    }
    return starRatingBarSizes.large;
  };

  _onMouseEnter = ratingValue => {
    this.setState({ hoveredStarIndex: ratingValue });
  };

  _onMouseLeave = () => {
    this.setState({ hoveredStarIndex: 0 });
  };

  _onStarIconClick = ratingValue => {
    this.props.onChange(ratingValue);
  };

  _renderStars = () => {
    const { readOnly } = this.props;

    return Object.values(starIndexes).map(ratingValue => {
      return readOnly
        ? this._renderReadOnlyModeStar(ratingValue)
        : this._renderInteractiveModeStar(ratingValue);
    });
  };

  _renderReadOnlyModeStar = ratingValue => {
    const { readOnly, value } = this.props;
    const { starsRatingBarSize } = this.state;

    const isFilledStar = ratingValue <= value;
    return (
      <StarFilledIcon
        key={ratingValue}
        data-hook={dataHooks.filledStar}
        {...styles(
          'star',
          { readOnly, filled: isFilledStar, empty: !isFilledStar },
          this.props,
        )}
        size={starRatingBarSizesInPx[starsRatingBarSize]}
      />
    );
  };

  _renderInteractiveModeStar = ratingValue => {
    const { value } = this.props;
    const { starsRatingBarSize, hoveredStarIndex } = this.state;

    const isStarHovered = hoveredStarIndex !== 0;
    const isFilledStar = isStarHovered
      ? ratingValue <= hoveredStarIndex
      : ratingValue <= value;

    const commonProps = {
      key: ratingValue,
      size: starRatingBarSizesInPx[starsRatingBarSize],
      onMouseEnter: () => this._onMouseEnter(ratingValue),
      onMouseLeave: () => this._onMouseLeave(),
      onClick: () => this._onStarIconClick(ratingValue),
    };

    return isFilledStar ? (
      <StarFilledIcon
        {...commonProps}
        data-hook={dataHooks.filledStar}
        data-index={ratingValue}
        {...styles(
          'star',
          { filled: true, hovered: isStarHovered },
          this.props,
        )}
      />
    ) : (
      <StarIcon
        {...commonProps}
        data-index={ratingValue}
        {...styles('star', { empty: true, hovered: isStarHovered }, this.props)}
      />
    );
  };

  _shouldShowRateCaption = () => {
    const { readOnly, rateCaptions } = this.props;
    let shouldShowRateCaption = false;

    if (rateCaptions) {
      const isValidRateCaption =
        Array.isArray(rateCaptions) && rateCaptions.length === 5;

      if (readOnly) {
        throw new Error('Rate caption is not available in read only mode.');
      } else if (!isValidRateCaption) {
        throw new Error('Rate caption must be an array of strings at size 5.');
      }
      shouldShowRateCaption = true;
    }

    return shouldShowRateCaption;
  };

  _renderRateCaption = () => {
    const { rateCaptions, value } = this.props;
    const rateCaptionCurrentLabel = value === 0 ? '' : rateCaptions[value - 1];

    return (
      <Text
        dataHook={dataHooks.rateCaption}
        className={styles.rateCaption}
        ellipsis
        size="small"
        weight="bold"
        secondary
      >
        {rateCaptionCurrentLabel}
      </Text>
    );
  };

  render() {
    const { dataHook } = this.props;

    return (
      <div data-hook={dataHook} {...styles('root', {}, { className })}>
        {this._renderStars()}
        {this._shouldShowRateCaption() ? this._renderRateCaption() : null}
      </div>
    );
  }
}

StarsRatingBar.displayName = 'StarsRatingBar';

StarsRatingBar.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Specifies the size of the star rating bar. Interactive mode must be 'large'. The default value for the read only mode is 'medium'. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),

  /** In read only mode rating cannot be changed. */
  readOnly: PropTypes.bool,

  /** Represent the rate value labels. Only when the array contains 5 strings, this star rating bar will display the rate caption labels. */
  rateCaptions: PropTypes.arrayOf(PropTypes.string),

  /** The star rating bar’s selected rate. */
  value: PropTypes.oneOf([0, 1, 2, 3, 4, 5]).isRequired,

  /** A Handler for rating changes
   * ##### Signature:
   * function(rating: number) => void
   * * `rating`: 1 | 2 | 3 | 4 | 5
   */
  onChange: PropTypes.func,
};

StarsRatingBar.defaultProps = {
  readOnly: false,
  onChange: () => {},
};

export default StarsRatingBar;
