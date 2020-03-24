import React from 'react';
import PropTypes from 'prop-types';
import { dataHooks } from './constants';
import Input from '../Input';
import IconButton from '../IconButton';
import Tooltip from '../Tooltip';
import Box from '../Box';
import { Check, X } from 'wix-ui-icons-common';
import styles from './EditableListItem.st.css';

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
      status,
      statusMessage,
      size,
    } = this.props;

    return (
      <Box dataHook={dataHook} width="100%">
        <Box marginRight={3} flex={1}>
          <Input
            className={styles.input}
            dataHook={dataHooks.editableListInput}
            onChange={this.onValueChanged}
            value={this.state.value}
            status={status}
            size={size}
            statusMessage={statusMessage}
            placeholder={placeholder}
          />
        </Box>
        <Box marginRight={2}>
          <Tooltip
            upgrade
            disabled={!cancelButtonTooltip}
            dataHook={dataHooks.editableListCancelButtonTooltip}
            content={cancelButtonTooltip}
          >
            <IconButton
              size={size}
              priority="secondary"
              dataHook={dataHooks.editableListCancelButton}
              onClick={onCancel}
            >
              <X />
            </IconButton>
          </Tooltip>
        </Box>
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
          >
            <Check />
          </IconButton>
        </Tooltip>
      </Box>
    );
  }
}

export const editableListItemBuilder = ({
  id,
  dataHook,
  className,
  size,
  placeholder,
  onApprove,
  onCancel,
  cancelButtonTooltip,
  approveButtonTooltip,
  status,
  statusMessage,
}) => ({
  id,
  disabled: true,
  value: props => (
    <EditableListItem
      {...props}
      dataHook={dataHook}
      className={className}
      size={size}
      placeholder={placeholder}
      onApprove={onApprove}
      onCancel={onCancel}
      cancelButtonTooltip={cancelButtonTooltip}
      approveButtonTooltip={approveButtonTooltip}
      statusMessage={statusMessage}
      status={status}
    />
  ),
});

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

  status: PropTypes.oneOf([
    Input.StatusError,
    Input.StatusWarning,
    Input.StatusLoading,
  ]),

  statusMessage: PropTypes.string,
};

EditableListItem.defaultProps = {
  size: 'medium',
};

export default EditableListItem;
