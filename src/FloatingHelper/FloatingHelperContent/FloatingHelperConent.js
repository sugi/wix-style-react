import React from 'react';
import PropTypes from 'prop-types';
import styles from './FloatingHelperContent.st.css';

/** FloatingHelperContent */
export const FloatingHelperContent = props => {
  const {
    title,
    body,
    actionText,
    onActionClick,
    actionTheme,
    image,
    appearance,
    footer,
    dataHook,
  } = props;

  return <div {...styles('root', {}, this.props)} data-hook={dataHook} />;
};

FloatingHelperContent.displayName = 'FloatingHelperContent';

FloatingHelperContent.propTypes = {
  /** Adds text as the title */
  title: PropTypes.string,
  /** Adds text as the body */
  body: PropTypes.string,
  /** Sets the text of the action button. Needs to be a non-empty string (and onActionClick prop has to be passed) in order for the action button to appear */
  actionText: PropTypes.string,
  /** Sets the theme of the action button */
  actionTheme: PropTypes.oneOf([
    'standard',
    'white',
    'premium',
    'lightPrimary',
  ]),
  /** Custom footer node */
  footer: PropTypes.node,
  /** When both onActionClick & actionText are provided, will make an action button appear and invoke onActionClick() upon click */
  onActionClick: PropTypes.func,
  /** Adds an image */
  image: PropTypes.node,
  /** Appearance : `dark` or `light`. */
  appearance: PropTypes.oneOf(['dark', 'light']),
};

FloatingHelperContent.defaultProps = {};
