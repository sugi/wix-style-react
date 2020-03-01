import * as React from 'react';
import PopoverProps from '../../Popover/index';

export interface ClosablePopoverActions {
  close: () => void;
}

export interface ClosablePopoverOwnProps {
  opened?: boolean;
  initiallyOpened?: boolean;
  target: React.ReactNode;
  onOpen?: Function;
  onClose?: Function;
  closeOnMouseLeave?: boolean;
  content: (closable: ClosablePopoverActions) => React.ReactNode;
}


export type ClosablePopoverProps = PopoverProps & ClosablePopoverOwnProps;
