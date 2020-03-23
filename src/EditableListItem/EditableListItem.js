import React from 'react';
import PropTypes from 'prop-types';
import { dataHooks } from './constants';
import Input from '../Input';
import IconButton from '../IconButton';
import Tooltip from '../Tooltip';

/** EditableListItem */
class EditableListItem extends React.PureComponent {
  state = {
    value: '',
  };

  onValueChanged = e => {
    this.setState({ value: e.target.value });
  };

  onApproveClicked = () => {
    this.props.onApprove(this.state.value);
  };

  render() {
    const {
      dataHook,
      placeholder,
      onCancel,
      cancelButtonTooltip,
      approveButtonTooltip,
      size,
    } = this.props;
    return (
      <div data-hook={dataHook}>
        <div data-hook={dataHooks.editableListInputWrapper}>
          <Input
            onChange={this.onValueChanged}
            value={this.state.value}
            size={size}
            placeholder={placeholder}
          />
        </div>
        <Tooltip
          upgrade
          disabled={!cancelButtonTooltip}
          dataHook={dataHooks.editableListCancelButtonTooltip}
          content={cancelButtonTooltip}
        >
          <IconButton
            size={size}
            dataHook={dataHooks.editableListCancelButton}
            onClick={onCancel}
          />
        </Tooltip>
        <Tooltip
          upgrade
          disabled={!approveButtonTooltip || !this.state.value}
          dataHook={dataHooks.editableListApproveButtonTooltip}
          content={approveButtonTooltip}
        >
          <IconButton
            size={size}
            onClick={this.onApproveClicked}
            dataHook={dataHooks.editableListApproveButton}
            disabled={!this.state.value}
          />
        </Tooltip>
      </div>
    );
  }
}

EditableListItem.displayName = 'EditableListItem';

EditableListItem.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** Placeholder for the input box */
  placeholder: PropTypes.string,

  /** A function that will be called when the user approves the changes */
  onApprove: PropTypes.func.isRequired,

  /** A function that will be called when the user cancels the changes */
  onCancel: PropTypes.func.isRequired,

  /** Cancel button tooltip text */
  cancelButtonTooltip: PropTypes.string,

  /** Approve button tooltip text */
  approveButtonTooltip: PropTypes.string,

  /** Approve button tooltip text */
  size: PropTypes.oneOf(['small', 'medium']),

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
};

EditableListItem.defaultProps = {};

export default EditableListItem;
