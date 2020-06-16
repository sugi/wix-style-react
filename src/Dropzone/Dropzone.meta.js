import Dropzone from './Dropzone';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(Dropzone);

metadata.exportedFrom({
  path: 'src/Dropzone/Dropzone.js',
});
