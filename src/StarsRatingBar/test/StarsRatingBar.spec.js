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

  it('should render stars rating bar', async () => {
    const { driver } = render(<StarsRatingBar value={1} />);

    expect(await driver.exists()).toBe(true);
  });

  it('should be displayed in interactive mode', async () => {});

  it('should be displayed in read only mode', async () => {});

  it('should display the correct rate caption', async () => {});

  it('should not display a rate caption', async () => {});

  it('should select a rating', async () => {});

  describe('Hover', () => {
    it('should show correct value on hover', async () => {});

    it('should display the rate caption of the hovered star', async () => {});
  });
});
