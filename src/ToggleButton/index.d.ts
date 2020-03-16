import * as React from 'react';
import { ButtonWithAsProp } from '../Button';
import { TooltipNewProps } from '../Tooltip';
import { OmitPolyfill } from '../common';

export type ToggleButtonProps = ButtonWithAsProp<{
  skin?: ToggleButtonSkin;
  size?: 'tiny' | 'small' | 'medium' | 'large';
  selected?: boolean;
  disabled?: boolean;
  dataHook?: string;
  labelValue?: React.ReactNode;
  labelPlacement?: 'tooltip' | 'bottom' | 'end';
  /** @deprecated use labelValue instead */
  tooltipContent?: React.ReactNode;
  tooltipProps?: OmitPolyfill<
    TooltipNewProps,
    'size' | 'content' | 'dataHook' | 'upgrade'
  >;
}>;

export default class ToggleButton extends React.Component<ToggleButtonProps> {}

export type ToggleButtonSkin = 'standard' | 'dark';
