import { PopoverDriver } from 'wix-ui-core/drivers/protractor';


export interface ClosablePopoverDriver extends PopoverDriver {
  isOpened: () => Promise<boolean>;
}

