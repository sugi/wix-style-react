import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface FloatingHelperContentDriver extends BaseUniDriver {
  getCountText(): Promise<string>;
  clickButton(): Promise<void>;
  getButtonText(): Promise<string>;
}
