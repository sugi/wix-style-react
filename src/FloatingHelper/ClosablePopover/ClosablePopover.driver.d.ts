import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface PopoverDriver extends BaseDriver {
  exists: () => boolean;
  getTargetElement: () => Element;
  getContentElement: () => any;
  isTargetElementExists: () => boolean;
  isContentElementExists: () => boolean;
  mouseEnter: () => any;
  mouseLeave: () => any;
  click: () => any;
  clickOutside: () => void;
  getArrowOffset: () => {
    top: string;
    left: string;
    right: string;
    bottom: string;
  };
  inlineStyles: () => CSSStyleDeclaration;
  getElementId: () => string;
  getArrowElement: () => any;
}

export interface ClosablePopoverDriver extends PopoverDriver {
  isOpened: () => boolean;
}
