import { BaseDriver} from 'wix-ui-core/dist/src/common/BaseDriver.protractor';

export interface FloatingHelperContentDriver extends BaseDriver {
  hasActionButton: () => Promise<boolean>;
}
