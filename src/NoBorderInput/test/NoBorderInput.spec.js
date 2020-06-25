import React from 'react';
import noBorderInputDriverFactory from '../NoBorderInput.driver';
import noBorderInputUniDriverFactory from '../NoBorderInput.uni.driver';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/unit';
import NoBorderInput from '../NoBorderInput';

const renderNoBorderInputWithProps = (props = {}) => (
  <NoBorderInput {...props} />
);

describe('NoBorderInput', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(noBorderInputDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(noBorderInputUniDriverFactory));
  });

  function runTests(render) {
    afterEach(() => {
      cleanup();
    });

    it('should verify component exists', async () => {
      const { driver } = render(renderNoBorderInputWithProps());
      expect(await driver.exists()).toBe(true);
    });

    it('should render label', async () => {
      const someLabel = 'bob';
      const { driver } = render(
        renderNoBorderInputWithProps({ label: someLabel }),
      );
      expect(await driver.getLabel()).toEqual(someLabel);
    });

    it('should not have status', async () => {
      const { driver } = render(renderNoBorderInputWithProps({}));
      expect(await driver.hasStatus('error')).toBe(false);
    });

    it('should render the status message', async () => {
      const someStatusMessage = 'Error!';
      const { driver } = render(
        renderNoBorderInputWithProps({
          status: NoBorderInput.StatusError,
          statusMessage: someStatusMessage,
        }),
      );
      expect(await driver.hasStatus('error')).toBe(true);
      expect(await driver.getStatusMessage()).toEqual(someStatusMessage);
    });

    it('should auto focus', async () => {
      const { driver } = render(
        renderNoBorderInputWithProps({ autoFocus: true }),
      );
      expect(await driver.isFocus()).toBe(true);
    });

    it('should invoke onFocus', async () => {
      const onFocus = jest.fn();
      const { driver } = render(renderNoBorderInputWithProps({ onFocus }));

      await driver.focus();

      expect(onFocus).toHaveBeenCalled();
    });

    it('should invoke onBlur', async () => {
      const onBlur = jest.fn();
      const { driver } = render(renderNoBorderInputWithProps({ onBlur }));

      await driver.focus();
      await driver.blur();

      expect(onBlur).toHaveBeenCalled();
    });
  }
});
