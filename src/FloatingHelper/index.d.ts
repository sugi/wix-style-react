import * as React from 'react';
import { FloatingHelperContent } from "./FloatingHelperContent/FloatingHelperContent";
import { ClosablePopoverActions } from './ClosablePopover/ClosablePopover';

declare enum FloatingHelperPopoverPlacement {
  autoStart ='auto-start',
  auto ='auto',
  autoEnd ='auto-end',
  topStart ='top-start',
  top = 'top',
  topEnd = 'top-end',
  rightStart = 'right-start',
  right = 'right',
  rightEnd = 'right-end',
  bottomEnd = 'bottom-end',
  bottom = 'bottom',
  bottomStart = 'bottom-start',
  leftEnd = 'left-end',
  left = 'left',
  leftStart = 'left-start',
}

declare enum FloatingHelperPopoverAppendTo {
  scrollParent = 'scrollParent',
  viewport = 'viewport',
  window = 'window',
}

export default class FloatingHelper extends React.PureComponent<FloatingHelperProps> {
  open: () => void;
  close: () => void;
  static Content: typeof FloatingHelperContent;
}

export enum Appearance {
  dark = 'dark',
  light = 'light',
}

export interface FloatingHelperProps {
  dataHook?: string,
  width?: string | number,
  target: React.ReactNode,
  content: (closable: ClosablePopoverActions) => React.ReactNode,
  onClose?: Function,
  onOpen?: Function,
  appearance?: Appearance,
  initiallyOpened?: boolean,
  opened?: boolean,
  appendTo?: FloatingHelperPopoverAppendTo,
  placement: FloatingHelperPopoverPlacement;
}
