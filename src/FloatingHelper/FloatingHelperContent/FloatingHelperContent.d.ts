import * as React from 'react';

export type ActionButtonTheme = 'standard' | 'white' | 'premium' | 'lightPrimary';
export type Appearance = 'dark' | 'light';

export interface FloatingHelperContentProps {
  title?: string;
  body: string;
  actionText?: string;
  actionTheme?: ActionButtonTheme;
  footer?: React.ReactNode;
  onActionClick?: () => void;
  image?: React.ReactNode;
  appearance?: Appearance;
}

declare const FloatingHelperContent: React.ComponentClass<FloatingHelperContentProps>;
