import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';
import { testkit as inputUniDriverFactory } from '../Input/Input.uni.driver';
import { iconButtonDriverFactory as iconButtonUniDriver } from '../IconButton/IconButton.uni.driver';

export const editableListItemDriverFactory = (base, body) => {
  const inputSelector = `[data-hook="${dataHooks.editableListInputWrapper}"]`;
  const approveButtonSelector = `[data-hook="${dataHooks.editableListApproveButton}"]`;
  const cancelButtonSelector = `[data-hook="${dataHooks.editableListCancelButton}"]`;

  const inputDriver = inputUniDriverFactory(base.$(inputSelector));
  const approveButtonDriver = iconButtonUniDriver(
    base.$(approveButtonSelector),
  );
  const cancelButtonDriver = iconButtonUniDriver(base.$(cancelButtonSelector));

  return {
    ...baseUniDriverFactory(base, body),

    /** Get the current count */
    getCountText: async () =>
      base.$(`[data-hook="${dataHooks.editableListItemCount}"]`).text(),
    inputDriver,
    approveButtonDriver,
    cancelButtonDriver,
  };
};
