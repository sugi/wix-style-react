import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import styles from './StarsRatingBar.st.css';
import {
  dataHooks,
  starRatingBarSizes,
  starRatingBarValues,
} from './constants';
import StarFilledIcon from 'wix-ui-icons-common/StarFilled';
import StarIcon from 'wix-ui-icons-common/Star';

const starIndexes = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
};

/** Star Rating Component  */
class StarsRatingBar extends React.PureComponent {
  constructor(props) {
    super(props);

    const starsRatingBarSize = this.getStarsRatingBarSize();

    this.state = {
      starsRatingBarSize,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.size !== this.props.size) {
      const starsRatingBarSize = this.getStarsRatingBarSize();
      this.setState({ starsRatingBarSize });
    }
  }

  getStarsRatingBarSize() {
    const starsRatingBarSize = this.props.size
      ? this.props.size
      : this.props.readOnly
      ? starRatingBarSizes.medium
      : starRatingBarSizes.large;
    return starsRatingBarSize;
  }

  // _handleClick = () => {
  //   this.setState(({ count }) => ({
  //     count: count + 1,
  //   }));
  // };

  renderStars() {
    const { readOnly, value } = this.props;

    return Object.values(starIndexes).map(ratingValue => {
      if (!readOnly) {
        return ratingValue <= value ? (
          <StarFilledIcon className={styles.star} />
        ) : (
          <StarIcon className={styles.star} />
        );
      }
      return ratingValue <= value ? (
        <StarFilledIcon className={styles.star} />
      ) : (
        <StarFilledIcon className={styles.star} />
      );
    });
  }

  render() {
    const { dataHook } = this.props;

    return (
      <div data-hook={dataHook}>
        {this.renderStars()}
        <Text ellipsis>rate caption text</Text>
      </div>
    );

    // const { count } = this.state;
    // const { dataHook, buttonText } = this.props;
    // const isEven = count % 2 === 0;
    //
    // return (
    //   <div
    //     {...styles('root', { even: isEven, odd: !isEven }, this.props)}
    //     data-hook={dataHook}
    //   >
    //     <Text dataHook={dataHooks.starsRatingBarCount}>
    //       You clicked this button {isEven ? 'even' : 'odd'} number (
    //       <span className={styles.number}>
    //         {count}
    //       </span>
    //       ) of times
    //     </Text>
    //
    //     <div className={styles.button}>
    //       <Button
    //         onClick={this._handleClick}
    //         dataHook={dataHooks.starsRatingBarButton}
    //       >
    //         {buttonText}
    //       </Button>
    //     </div>
    //   </div>
    // );
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

  /** Called upon every value change. */
  onChange: PropTypes.func,
};

StarsRatingBar.defaultProps = {
  readOnly: false,
  onChange: () => {},
};

export default StarsRatingBar;
