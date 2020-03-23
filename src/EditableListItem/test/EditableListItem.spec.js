// file.only

import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import EditableListItem from '../EditableListItem';
import { editableListItemPrivateDriverFactory } from './EditableListItem.private.uni.driver';

describe('EditableListItem', () => {
  const render = createRendererWithUniDriver(
    editableListItemPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<EditableListItem />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.inputDriver.exists()).toBe(true);
    expect(await driver.approveButtonDriver.exists()).toBe(true);
    expect(await driver.cancelButtonDriver.exists()).toBe(true);
  });

  it('should show disabled confirm button when have no value', async () => {
    const { driver } = render(<EditableListItem />);
    expect(await driver.approveButtonDriver.isButtonDisabled()).toBe(true);
  });

  it('should render placeholder text when have no value', async () => {
    const placeholder = 'some placeholder';
    const { driver } = render(<EditableListItem placeholder={placeholder} />);
    expect(await driver.inputDriver.getPlaceholder()).toBe(placeholder);
  });

  describe('when value is entered', () => {
    it('should show enabled confirm button', async () => {
      const { driver } = render(<EditableListItem />);
      await driver.inputDriver.enterText('some text');
      expect(await driver.approveButtonDriver.isButtonDisabled()).toBe(false);
    });

    it('should call onConfirm with the value when clicking approve', async () => {
      const value = 'some val';
      const onApprove = jest.fn();
      const { driver } = render(<EditableListItem onApprove={onApprove} />);
      await driver.inputDriver.enterText(value);
      await driver.approveButtonDriver.click();
      expect(onApprove).toHaveBeenCalledWith(value);
    });
  });
});
