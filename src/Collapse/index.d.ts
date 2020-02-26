import * as React from 'react';
export interface CollapseProps {
  dataHook?: string;
  children?: React.ReactNode;
  open?: string;
}

export default class Collapse extends React.Component<CollapseProps> {}
