import { dropzoneDriverFactory as publicDriverFactory } from '../Dropzone.uni.driver';

export const dropzonePrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
