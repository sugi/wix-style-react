import React from 'react';
import PropTypes from 'prop-types';
import { dataHooks } from './constants';
import Input from '../Input/Input';
import IconButton from '../IconButton';

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
    const { dataHook, placeholder, onCancel } = this.props;
    return (
      <div data-hook={dataHook}>
        <div data-hook={dataHooks.editableListInputWrapper}>
          <Input
            onChange={this.onValueChanged}
            value={this.state.value}
            placeholder={placeholder}
          />
        </div>
        <IconButton
          dataHook={dataHooks.editableListCancelButton}
          onClick={onCancel}
        />
        <IconButton
          onClick={this.onApproveClicked}
          dataHook={dataHooks.editableListApproveButton}
          disabled={!this.state.value}
        />
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
  onApprove: PropTypes.func,

  /** A function that will be called when the user cancels the changes */
  onCancel: PropTypes.func,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
};

EditableListItem.defaultProps = {};

export default EditableListItem;
