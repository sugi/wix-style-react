import React, { PureComponent } from 'react';
import { ButtonNext } from 'wix-ui-core/dist/src/components/button-next';

import { oneOfType, string, node, oneOf, object, bool, func } from 'prop-types';
import { iconChildSize } from './constants';

import { generateDataAttr } from '../utils/generateDataAttr';
import cx from 'classnames';
import styles from './IconButton.st.css';

class IconButton extends PureComponent {
  static displayName = 'IconButton';

  static propTypes = {
    /** render as some other component or DOM tag */
    as: oneOfType([func, object, string]),
    /** Classes to be applied to the root element */
    className: string,
    /** Used for passing any wix-style-react icon. For external icon make sure to follow ux sizing guidelines */
    children: node,
    /** Button skins */
    skin: oneOf(['standard', 'inverted', 'light', 'transparent', 'premium']),
    /** Button priority */
    priority: oneOf(['primary', 'secondary']),
    /** Button size */
    size: oneOf(['tiny', 'small', 'medium', 'large']),
    /** Click event handler  */
    onClick: func,
    /** Applies disabled styles */
    disabled: bool,
    /** String based data hook */
    dataHook: string,
    myNewProp: object,
  };

  static defaultProps = {
    skin: 'standard',
    priority: 'primary',
    size: 'medium',
    disabled: false,
  };

  render() {
    const {
      skin,
      className: userClassName,
      priority,
      size,
      children,
      dataHook,
      ...rest
    } = this.props;

    const childSize = iconChildSize[size];

    const { className } = styles('root', { skin, priority, size });
    const classNames = cx(className, userClassName);

    return (
      <ButtonNext
        {...rest}
        {...styles('root', { skin, priority, size }, this.props)}
        {...generateDataAttr(this.props, ['skin', 'priority', 'size'])}
        data-hook={dataHook}
        className={classNames}
      >
        {children &&
          React.cloneElement(children, {
            size: childSize,
            width: childSize,
            height: childSize,
          })}
      </ButtonNext>
    );
  }
}

export default IconButton;
