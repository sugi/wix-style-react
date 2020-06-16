import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface DropzoneUniDriver extends BaseUniDriver {
  getCountText(): Promise<string>;
  clickButton(): Promise<void>;
  getButtonText(): Promise<string>;
}
