import * as React from 'react';

export interface DropzoneProps {
  dataHook?: string;
  className?: string;
  buttonText?: string;
}

export default class Dropzone extends React.PureComponent<DropzoneProps>{}
