import React from 'react';
import PropTypes from 'prop-types';
import styles from './FloatingHelperContent.st.css';
//import { dataHooks, actionButtonTheme } from './constants';

/** FloatingHelperContent */
class FloatingHelperContent extends React.PureComponent {
  render() {
    const { dataHook } = this.props;

    return <div {...styles('root', {}, this.props)} data-hook={dataHook} />;
  }
}

FloatingHelperContent.displayName = 'FloatingHelperContent';

FloatingHelperContent.propTypes = {};

FloatingHelperContent.defaultProps = {};

export default FloatingHelperContent;
