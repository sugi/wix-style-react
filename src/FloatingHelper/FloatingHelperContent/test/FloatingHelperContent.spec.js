import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import FloatingHelperContent from '../FloatingHelperContent';
import { floatingHelperContentPrivateDriverFactory } from './FloatingHelperContent.private.uni.driver';

describe('FloatingHelperContent', () => {
  const render = createRendererWithUniDriver(
    floatingHelperContentPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<FloatingHelperContent />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<FloatingHelperContent />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<FloatingHelperContent buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
