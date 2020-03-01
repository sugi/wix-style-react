import { FloatingHelperContentDriver } from './FloatingHelperContent/FloatingHelperContent.protractor.driver';
import { ClosablePopoverDriver } from './ClosablePopover/ClosablePopover.protractor';


export interface FloatingHelperDriver extends ClosablePopoverDriver {
  getHelperContentDriver: () => FloatingHelperContentDriver;
}
