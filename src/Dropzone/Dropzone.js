import React from 'react';
import PropTypes from 'prop-types';
import { buildChildrenObject } from 'wix-ui-core/dist/src/utils';
import { dataHooks } from './constants';
import classNames from 'classnames';

/** Defines a region in the page where files can be dropped */
class Dropzone extends React.PureComponent {
  state = {
    isDragActive: false,
  };

  static displayName = 'Dropzone';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used for testing purposes */
    dataHook: PropTypes.string,

    /** A class to be appended to the root dropzone element */
    className: PropTypes.string,

    /** An event handler for files dropped over the dropzone */
    onDrop: PropTypes.func.isRequired,

    children: (props, propName) => {
      const childrenArr = React.Children.toArray(props[propName]);
      const childrenObj = buildChildrenObject(childrenArr, {
        Overlay: null,
        Content: null,
      });

      if (!childrenObj.Content) {
        return new Error(
          'Invalid children provided, <Dropzone.Content /> must be provided',
        );
      }

      if (!childrenObj.Overlay) {
        return new Error(
          'Invalid children provided, <Dropzone.Overlay /> must be provided',
        );
      }

      return childrenArr.reduce((err, child) => {
        if (
          !err &&
          child.type.displayName !== 'Dropzone.Content' &&
          child.type.displayName !== 'Dropzone.Overlay'
        ) {
          return new Error(
            `Invalid children provided, unknown child <${child.type
              .displayName || child.type} /> supplied`,
          );
        }

        return err;
      }, false);
    },
  };

  static Overlay = ({ children }) => (
    <div data-hook={dataHooks.dropzoneOverlay} className={'dropzoneOverlay'}>
      {children}
    </div>
  );

  static Content = ({ children }) => (
    <div data-hook={dataHooks.dropzoneContent} className={'dropzoneContent'}>
      {children}
    </div>
  );

  _eventHasFiles = event => {
    /** DataTransfer object is defined here: https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer */
    return event.dataTransfer
      ? event.dataTransfer.items.some(item => item.kind === 'file')
      : !!(event.target && event.target.files);
  };

  _onDragEnter = event => {
    event.preventDefault();

    /** We only want to show the overlay when files are dragged over the dropzone */
    return this._eventHasFiles(event) && this.setState({ isDragActive: true });
  };

  _onDragLeave = event => {
    event.preventDefault();

    return this.setState({ isDragActive: false });
  };

  _onDrop = event => {
    event.preventDefault();
    if (this._eventHasFiles(event)) {
      const files = event.dataTransfer
        ? event.dataTransfer.items.map(item => item.getAsFile())
        : event.target.files;
      this.setState({ isDragActive: false });
      return this.props.onDrop(files);
    }
  };

  render() {
    const { children, dataHook, className } = this.props;
    const { isDragActive } = this.state;

    const childrenObj = buildChildrenObject(children, {
      Content: null,
      Overlay: null,
    });

    return (
      <div
        data-hook={dataHook}
        className={classNames(className, 'dropzone')}
        onDrop={this._onDrop}
        onDragEnter={this._onDragEnter}
        onDragLeave={this._onDragLeave}
      >
        {isDragActive && childrenObj.Overlay}
        {childrenObj.Content}
      </div>
    );
  }
}

Dropzone.Content.displayName = 'Dropzone.Content';
Dropzone.Overlay.displayName = 'Dropzone.Overlay';

export default Dropzone;
