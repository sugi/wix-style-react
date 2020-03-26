import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { InputUniDriver } from '../Input/Input.uni.driver';
import { IconButtonUniDriver } from '../IconButton/IconButton.uni.driver';
import { TooltipUniDriver } from '../Tooltip/TooltipNext/Tooltip.uni.driver';

export interface EditableListItemUniDriver extends BaseUniDriver {
  inputDriver: InputUniDriver;
  approveButtonDriver: IconButtonUniDriver;
  cancelButtonDriver: IconButtonUniDriver;
  cancelButtonTooltipDriver: TooltipUniDriver;
  approveButtonTooltipDriver: TooltipUniDriver;
}
