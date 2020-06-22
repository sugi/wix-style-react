import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import StarsRatingBar from '../StarsRatingBar';
import { starsRatingBarPrivateDriverFactory } from './StarsRatingBar.private.uni.driver';

describe(StarsRatingBar.displayName, () => {
  const render = createRendererWithUniDriver(
    starsRatingBarPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<StarsRatingBar />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<StarsRatingBar />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<StarsRatingBar buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
