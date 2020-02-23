import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import FloatingHelper from '../FloatingHelper';
import { floatingHelperPrivateDriverFactory } from './FloatingHelper.private.uni.driver';

describe('FloatingHelper', () => {
  const render = createRendererWithUniDriver(
    floatingHelperPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<FloatingHelper />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<FloatingHelper />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<FloatingHelper buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
