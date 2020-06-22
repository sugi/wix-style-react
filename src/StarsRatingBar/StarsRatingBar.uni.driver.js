import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const starsRatingBarDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    // /** Get the current count */
    // getCountText: async () =>
    //   base.$(`[data-hook="${dataHooks.starsRatingBarCount}"]`).text(),
    //
    // /** Click the button */
    // clickButton: async () =>
    //   base.$(`[data-hook="${dataHooks.starsRatingBarButton}"]`).click(),
    //
    // /** Get the button's text */
    // getButtonText: async () =>
    //   base.$(`[data-hook="${dataHooks.starsRatingBarButton}"]`).text(),

    /** Select the star rating bar value */
    selectRating: async () => {},

    /** Return the selected rating (a number between 0 to 5) */
    getSelectedRating: async () => {},
  };
};
