import React from 'react';
import PropTypes from 'prop-types';
import { dataHooks } from './constants';
import style from './MobilePreviewWidget.st.css';

import PreviewWidget from '../PreviewWidget';

/** Mobile preview widget */
class MobilePreviewWidget extends React.PureComponent {
  static displayName = 'MobilePreviewWidget';

  static propTypes = {
    /** Mobile preview widget data hook*/
    dataHook: PropTypes.string,

    /** Background skin. To use `custom` skin, set it to `custom` and use the `backgroundColor` prop*/
    skin: PropTypes.oneOf(['neutral', 'gradient', 'custom']),

    /** Mobile preview widget background color. Can be set with `design system` colors*/
    backgroundColor: PropTypes.string,

    /** Sets the height of the component.*/
    height: PropTypes.string,

    /** Sets the width of the component */
    width: PropTypes.string,

    /** Node to preview */
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    skin: 'neutral',
    height: '100%',
    width: '100%',
  };

  render() {
    const {
      dataHook,
      skin,
      backgroundColor,
      height,
      width,
      children,
    } = this.props;

    return (
      <PreviewWidget
        {...style('root')}
        dataHook={dataHook}
        skin={skin}
        backgroundColor={backgroundColor}
        height={height}
        width={width}
      >
        <div data-hook={dataHooks.mobileHeader} className={style.header}>
          <div className={style.speaker} />
          <div className={style.camera} />
        </div>
        <div data-hook={dataHooks.mobileContent} className={style.content}>
          {children}
        </div>
        <div data-hook={dataHooks.mobileFooter} className={style.footer} />
      </PreviewWidget>
    );
  }
}

export default MobilePreviewWidget;
