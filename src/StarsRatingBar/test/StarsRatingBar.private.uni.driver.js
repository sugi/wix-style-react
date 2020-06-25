import { starsRatingBarDriverFactory as publicDriverFactory } from '../StarsRatingBar.uni.driver';
import { dataHooks } from '../constants';

export const starsRatingBarPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"

    /** Get displayed caption label */
    getDisplayedRatingCaptionLabel: async () =>
      await base.$(`[data-hook="${dataHooks.ratingCaption}"]`).text(),

    /** Is the rating caption exist */
    isRatingCaptionExists: async () =>
      await base.$(`[data-hook="${dataHooks.ratingCaption}"]`).exists(),
  };
};
