import React from 'react';
import CropRotate from 'wix-ui-icons-common/CropRotate';
import { storiesOf } from '@storybook/react';
import ToggleButton from '../ToggleButton';

const tests = [
  {
    describe: 'size',
    its: [
      {
        it: 'tiny',
        props: {
          size: 'tiny',
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'small',
        props: {
          size: 'small',
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'medium',
        props: {
          size: 'medium',
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'large',
        props: {
          size: 'large',
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
    ],
  },
  {
    describe: 'skin',
    its: [
      {
        it: 'standard',
        props: { labelValue: 'Crop & Rotate', children: <CropRotate /> },
      },
      {
        it: 'dark',
        props: {
          skin: 'dark',
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
    ],
  },
  {
    describe: 'selected',
    its: [
      {
        it: 'false',
        props: { labelValue: 'Crop & Rotate', children: <CropRotate /> },
      },
      {
        it: 'true',
        props: {
          selected: true,
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
    ],
  },
  {
    describe: 'disabled',
    its: [
      {
        it: 'false',
        props: {
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'true',
        props: {
          disabled: true,
          selected: true,
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
    ],
  },
  {
    describe: 'labelPosition',
    its: [
      {
        it: 'tooltip',
        props: {
          labelPosition: 'tooltip',
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'end',
        props: {
          labelPosition: 'end',
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
      {
        it: 'bottom',
        props: {
          labelPosition: 'bottom',
          labelValue: 'Crop & Rotate',
          children: <CropRotate />,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`ToggleButton${describe ? '/' + describe : ''}`, module).add(
      it,
      () => <ToggleButton {...props} />,
    );
  });
});
