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

  describe('rate caption', () => {
    it('should display the correct rate caption', async () => {
      const rateCaptions = ['bad', 'not good', 'ok', 'good', 'excellent'];
      const { driver } = render(
        <StarsRatingBar value={3} rateCaptions={rateCaptions} />,
      );

      expect(await driver.getDisplayedRateCaptionLabel()).toEqual('ok');
    });

    it('should not display a rate caption', async () => {
      const { driver } = render(<StarsRatingBar value={2} />);

      expect(await driver.isRatingCaptionExists()).toBeFalsy();
    });
  });

  it('expect onChange to be called after selecting a rating', async () => {
    const onChange = jest.fn();
    const { driver } = render(<StarsRatingBar value={0} onChange={onChange} />);

    expect(await driver.getSelectedRating()).toEqual(0);

    await driver.selectRating(4);
    expect(onChange.mock.calls.length).toEqual(1);
  });

  describe('hover', () => {
    it('should show correct value on hover', async () => {
      const { driver } = render(<StarsRatingBar value={0} />);

      expect(await driver.getSelectedRating()).toEqual(0);

      await driver.hoverOnStar(3);
      expect(await driver.getSelectedRating()).toEqual(3);
    });

    it('should display the rate caption of the hovered star', async () => {
      const rateCaptions = ['bad', 'not good', 'ok', 'good', 'excellent'];
      const { driver } = render(
        <StarsRatingBar value={3} rateCaptions={rateCaptions} />,
      );

      expect(await driver.getSelectedRating()).toEqual(3);

      await driver.hoverOnStar(4);
      expect(await driver.getDisplayedRateCaptionLabel()).toEqual('good');
    });
  });
});
