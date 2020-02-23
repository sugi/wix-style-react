import { floatingHelperContentDriverFactory as publicDriverFactory } from '../FloatingHelperContent.uni.driver';

export const floatingHelperContentPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
