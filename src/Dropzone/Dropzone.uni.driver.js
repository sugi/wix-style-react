import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataTransferFromFiles } from './test/Dropzone.private.uni.driver';
import { Simulate } from 'react-dom/test-utils';
import { dataHooks } from './constants';

export const dropzoneDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    getContentElement: () => base.$(`[data-hook=${dataHooks.dropzoneContent}]`),
    getOverlayElement: () => base.$(`[data-hook=${dataHooks.dropzoneOverlay}]`),
    dropFiles: files =>
      // eslint-disable-next-line no-restricted-properties
      base.getNative().then(el =>
        Simulate.drop(el, {
          dataTransfer: dataTransferFromFiles(files),
        }),
      ),
  };
};
