import { starsRatingBarDriverFactory as publicDriverFactory } from '../StarsRatingBar.uni.driver';

export const starsRatingBarPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
