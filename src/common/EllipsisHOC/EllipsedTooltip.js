import * as React from 'react';
import * as ReactDOM from 'react-dom';
import shallowEqual from 'shallowequal';
import debounce from 'lodash/debounce';
import Tooltip from '../../Tooltip';
import { getDisplayName } from '../hocUtils';
import styles from './EllipsedTooltip.st.css';

class StateFullComponentWrap extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return React.cloneElement(children, props);
  }
}

class EllipsedTooltip extends React.Component {
  static defaultProps = { showTooltip: true };

  state = { isEllipsisActive: false };

  componentDidMount() {
    window.addEventListener('resize', this._debouncedUpdate);
    this._updateEllipsisState();
  }

  componentWillUnmount() {
    this._debouncedUpdate.cancel();
    window.removeEventListener('resize', this._debouncedUpdate);
  }

  componentDidUpdate(prevProps) {
    // if props changed, then we want to re-check node for ellipsis state
    // and we can not do such check in render, because we want to check already rendered node
    if (!shallowEqual(prevProps, this.props)) {
      this._updateEllipsisState();
    }
  }

  _updateEllipsisState = () => {
    const isEllipsisActive =
      this.props.showTooltip &&
      this.textNode &&
      this.textNode.offsetWidth < this.textNode.scrollWidth;

    if (isEllipsisActive !== this.state.isEllipsisActive) {
      this.setState({
        isEllipsisActive,
      });
    }
  };

  _debouncedUpdate = debounce(this._updateEllipsisState, 100);

  _renderText = () => {
    const { component, style } = this.props;
    return (
      <StateFullComponentWrap
        {...styles('text', {}, component.props)}
        style={{
          ...style,
          whiteSpace: 'nowrap',
        }}
        ref={n => (this.textNode = ReactDOM.findDOMNode(n))}
      >
        {component}
      </StateFullComponentWrap>
    );
  };

  render() {
    const { showTooltip, tooltipProps } = this.props;
    const { isEllipsisActive } = this.state;

    if (isEllipsisActive && showTooltip) {
      return (
        <Tooltip
          appendTo="scrollParent"
          {...tooltipProps}
          {...styles('root', {}, tooltipProps || this.props)}
          content={
            <div className={styles.content}>{this.textNode.textContent}</div>
          }
          showArrow
        >
          {this._renderText()}
        </Tooltip>
      );
    }
    return this._renderText();
  }
}

export const withEllipsedTooltip = ({
  showTooltip,
  shouldLoadAsync,
  tooltipProps,
} = {}) => Comp => {
  const WrapperComponent = props => (
    <EllipsedTooltip
      {...props}
      component={React.createElement(Comp, props)}
      shouldLoadAsync={shouldLoadAsync}
      showTooltip={showTooltip}
      data-hook="ellipsed-tooltip-wrapper"
      tooltipProps={tooltipProps}
    />
  );

  WrapperComponent.displayName = getDisplayName(Comp);

  return WrapperComponent;
};
