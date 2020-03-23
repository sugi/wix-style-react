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
    const { driver } = render(
      <EditableListItem onApprove={jest.fn()} onCancel={jest.fn()} />,
    );

    expect(await driver.exists()).toBe(true);
    expect(await driver.inputDriver.exists()).toBe(true);
    expect(await driver.approveButtonDriver.exists()).toBe(true);
    expect(await driver.cancelButtonDriver.exists()).toBe(true);
  });

  it('should show disabled confirm button when have no value', async () => {
    const { driver } = render(
      <EditableListItem onApprove={jest.fn()} onCancel={jest.fn()} />,
    );
    expect(await driver.approveButtonDriver.isButtonDisabled()).toBe(true);
  });

  it('should render placeholder text when have no value', async () => {
    const placeholder = 'some placeholder';
    const { driver } = render(
      <EditableListItem
        onApprove={jest.fn()}
        onCancel={jest.fn()}
        placeholder={placeholder}
      />,
    );
    expect(await driver.inputDriver.getPlaceholder()).toBe(placeholder);
  });

  it('should call onCancel when clicking cancel', async () => {
    const onCancel = jest.fn();
    const { driver } = render(
      <EditableListItem onApprove={jest.fn()} onCancel={onCancel} />,
    );
    await driver.cancelButtonDriver.click();
    expect(onCancel).toHaveBeenCalled();
  });

  describe('when value is entered', () => {
    it('should show enabled confirm button', async () => {
      const { driver } = render(
        <EditableListItem onApprove={jest.fn()} onCancel={jest.fn()} />,
      );
      await driver.inputDriver.enterText('some text');
      expect(await driver.approveButtonDriver.isButtonDisabled()).toBe(false);
    });

    it('should call onConfirm with the value when clicking approve', async () => {
      const value = 'some val';
      const onApprove = jest.fn();
      const { driver } = render(
        <EditableListItem onCancel={jest.fn()} onApprove={onApprove} />,
      );
      await driver.inputDriver.enterText(value);
      await driver.approveButtonDriver.click();
      expect(onApprove).toHaveBeenCalledWith(value);
    });
  });

  describe('tooltips', () => {
    it('should show cancel button tooltip', async () => {
      const cancelButtonTooltip = 'cancel tooltip';
      const { driver } = render(
        <EditableListItem
          cancelButtonTooltip={cancelButtonTooltip}
          onApprove={jest.fn()}
          onCancel={jest.fn()}
        />,
      );
      await driver.cancelButtonTooltipDriver.mouseEnter();
      expect(await driver.cancelButtonTooltipDriver.tooltipExists()).toBe(true);
      expect(await driver.cancelButtonTooltipDriver.getTooltipText()).toBe(
        cancelButtonTooltip,
      );
    });

    it('should show cancel button tooltip if tooltip prop is not provided', async () => {
      const { driver } = render(
        <EditableListItem onApprove={jest.fn()} onCancel={jest.fn()} />,
      );
      await driver.cancelButtonTooltipDriver.mouseEnter();
      expect(await driver.cancelButtonTooltipDriver.tooltipExists()).toBe(
        false,
      );
    });

    it('should not show tooltip when approve button is disabled', async () => {
      const approveButtonTooltip = 'approve tooltip';
      const { driver } = render(
        <EditableListItem
          approveButtonTooltip={approveButtonTooltip}
          onApprove={jest.fn()}
          onCancel={jest.fn()}
        />,
      );
      await driver.approveButtonTooltipDriver.mouseEnter();
      expect(await driver.approveButtonTooltipDriver.tooltipExists()).toBe(
        false,
      );
    });

    it('should show tooltip when approve button is enabled', async () => {
      const approveButtonTooltip = 'approve tooltip';
      const { driver } = render(
        <EditableListItem
          approveButtonTooltip={approveButtonTooltip}
          onApprove={jest.fn()}
          onCancel={jest.fn()}
        />,
      );
      await driver.inputDriver.enterText('some text');
      await driver.approveButtonTooltipDriver.mouseEnter();
      expect(await driver.approveButtonTooltipDriver.tooltipExists()).toBe(
        true,
      );
      expect(await driver.approveButtonTooltipDriver.getTooltipText()).toBe(
        approveButtonTooltip,
      );
    });

    it('should not show tooltip when approve button is enabled and tooltip prop is not provided', async () => {
      const { driver } = render(
        <EditableListItem onApprove={jest.fn()} onCancel={jest.fn()} />,
      );
      await driver.inputDriver.enterText('some text');
      await driver.approveButtonTooltipDriver.mouseEnter();
      expect(await driver.approveButtonTooltipDriver.tooltipExists()).toBe(
        false,
      );
    });
  });

  // describe('size prop', () => {
  //   it('should render all in small size', async () => {
  //     const { driver } = render(
  //       <EditableListItem
  //         size="small"
  //         onApprove={jest.fn()}
  //         onCancel={jest.fn()}
  //       />,
  //     );
  //     expect(await driver.inputDriver.getSize()).toBe(true);
  //     // cant check icon button size
  //   });
  // });
});
