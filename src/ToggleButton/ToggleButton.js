import React, { cloneElement, PureComponent } from 'react';
import { bool, func, node, object, oneOf, oneOfType, string } from 'prop-types';
import { ButtonNext } from 'wix-ui-core/dist/src/components/button-next';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import styles from './ToggleButton.st.css';
import Tooltip from '../Tooltip';
import deprecationLog from '../utils/deprecationLog';
import Text from '../Text';
import { iconChildSize } from './constants';

class Icon extends PureComponent {
  render() {
    const {
      children,
      size,
      tooltipProps,
      tooltipDisabled,
      labelValue,
      focusableOnBlur,
      focusableOnFocus,
    } = this.props;
    const iconSize = iconChildSize[size];

    return (
      children && (
        <Tooltip
          {...tooltipProps}
          upgrade
          size="small"
          content={labelValue}
          disabled={tooltipDisabled}
        >
          {/* This additional span is needed make focus states work correctly on descendant <div> element. Otherwise Tooltip will override those props. */}
          <span>
            <div
              {...styles('icon', { size }, this.props)}
              tabIndex={1}
              onBlur={focusableOnBlur}
              onFocus={focusableOnFocus}
            >
              {cloneElement(children, {
                width: iconSize,
                height: iconSize,
              })}
            </div>
          </span>
        </Tooltip>
      )
    );
  }
}

const ToggleButtonIcon = withFocusable(Icon);

class ToggleButton extends PureComponent {
  static displayName = 'ToggleButton';
  static propTypes = {
    /** render as some other component or DOM tag */
    as: oneOfType([func, object, string]),
    /** Used for passing any wix-style-react icon. For external icon make sure to follow ux sizing guidelines */
    children: node,
    /** Button skins */
    skin: oneOf(['standard', 'dark']),
    /** Button size */
    size: oneOf(['tiny', 'small', 'medium', 'large']),
    /** Label content */
    labelValue: node,
    /** Label placement */
    labelPlacement: oneOf(['tooltip', 'bottom', 'end']),
    /** Click event handler  */
    onClick: func,
    /** Applies selected styles */
    selected: bool,
    /** Applies disabled styles */
    disabled: bool,
    /** String based data hook */
    dataHook: string,
    /** Tooltip content that will appear on hover
     * @deprecated use labelValue instead */
    tooltipContent: node,
    /** Tooltip props for label. Applied only when `labelPlacement` is `tooltip`. */
    tooltipProps: object,
  };
  static defaultProps = {
    skin: 'standard',
    size: 'medium',
    disabled: false,
    tooltipContent: '',
    labelValue: '',
    labelPlacement: 'tooltip',
    tooltipProps: {
      placement: 'top',
    },
  };
  componentDidMount() {
    const { tooltipContent } = this.props;
    if (tooltipContent) {
      deprecationLog(
        '"tooltipContent" prop is deprecated. Use "labelValue" instead.',
      );
    }
  }
  renderLabel = () => {
    const { disabled, size, labelValue, labelPlacement } = this.props;
    return (
      <Text
        {...styles('label', { placement: labelPlacement, size }, this.props)}
        disabled={disabled}
        dataHook="togglebutton-label"
        size="tiny"
        weight="thin"
      >
        {labelValue}
      </Text>
    );
  };
  render() {
    const {
      children,
      size,
      skin,
      tooltipProps,
      labelValue,
      selected,
      dataHook,
      labelPlacement,
      disabled,
      onClick,
      ...rest
    } = this.props;

    return (
      <ButtonNext
        {...styles('root', { disabled, selected })}
        tabIndex={-1}
        data-hook={dataHook}
        data-placement={labelPlacement}
        data-selected={selected}
        data-skin={skin}
        onClick={disabled ? null : onClick}
        {...rest}
      >
        <ToggleButtonIcon
          size={size}
          tooltipProps={tooltipProps}
          labelValue={labelValue}
          tooltipDisabled={labelPlacement !== 'tooltip'}
        >
          {children}
          {labelPlacement === 'end' ? this.renderLabel() : null}
        </ToggleButtonIcon>
        {labelPlacement === 'bottom' ? this.renderLabel() : null}
      </ButtonNext>
    );
  }
}
export default ToggleButton;
