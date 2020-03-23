import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';
import { testkit as inputUniDriverFactory } from '../Input/Input.uni.driver';
import { iconButtonDriverFactory as iconButtonUniDriver } from '../IconButton/IconButton.uni.driver';
import { tooltipDriverFactory as tooltipUniDriver } from '../Tooltip/TooltipNext/Tooltip.uni.driver';

export const editableListItemDriverFactory = (base, body) => {
  const inputSelector = `[data-hook="${dataHooks.editableListInputWrapper}"]`;
  const approveButtonSelector = `[data-hook="${dataHooks.editableListApproveButton}"]`;
  const cancelButtonSelector = `[data-hook="${dataHooks.editableListCancelButton}"]`;
  const cancelButtonTooltipSelector = `[data-hook="${dataHooks.editableListCancelButtonTooltip}"]`;
  const approveButtonTooltipSelector = `[data-hook="${dataHooks.editableListApproveButtonTooltip}"]`;

  const inputDriver = inputUniDriverFactory(base.$(inputSelector));
  const approveButtonDriver = iconButtonUniDriver(
    base.$(approveButtonSelector),
  );
  const cancelButtonDriver = iconButtonUniDriver(base.$(cancelButtonSelector));

  const cancelButtonTooltipDriver = tooltipUniDriver(
    base.$(cancelButtonTooltipSelector),
    body,
  );
  const approveButtonTooltipDriver = tooltipUniDriver(
    base.$(approveButtonTooltipSelector),
    body,
  );

  return {
    ...baseUniDriverFactory(base, body),

    /** Get the current count */
    inputDriver,
    approveButtonDriver,
    cancelButtonDriver,
    cancelButtonTooltipDriver,
    approveButtonTooltipDriver,
  };
};
