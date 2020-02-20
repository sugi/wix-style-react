import React from 'react';
import PropTypes from 'prop-types';
import styles from './FloatingHelper.st.css';
import { dataHooks, floatingHelperAppearance } from './constants';

/** FloatingHelper */
class FloatingHelper extends React.PureComponent {
  state = {
    count: 0,
  };

  _handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  render() {
    const { dataHook } = this.props;

    return <div {...styles('root', {}, this.props)} data-hook={dataHook} />;
  }
}

FloatingHelper.displayName = 'FloatingHelper';

FloatingHelper.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Text for the button */
  buttonText: PropTypes.string,

  /** Width HTML attribute of the content. If a number is passed then it defaults to px. e.g width={400} => width="400px" */
  width: PropTypes.oneOf([PropTypes.string, PropTypes.number]),

  /** The target of the popover */
  target: PropTypes.node,

  /** A `<FloatingHelper.Content>` component */
  content: PropTypes.node,

  /** In Controlled mode - called when the close button is clicked. In Uncontrolled mode - called when the popover is closed */
  onClose: PropTypes.func,

  /** FloatingHelper appearance */
  appearance: PropTypes.oneOf(['dark', 'light']),
};

FloatingHelper.defaultProps = {};

export default FloatingHelper;
