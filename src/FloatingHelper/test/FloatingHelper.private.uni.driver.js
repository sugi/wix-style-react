import { floatingHelperDriverFactory as publicDriverFactory } from '../FloatingHelper.uni.driver';

export const floatingHelperPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
