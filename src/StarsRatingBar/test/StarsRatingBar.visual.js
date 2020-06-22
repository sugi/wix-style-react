import React from 'react';
import { storiesOf } from '@storybook/react';
import StarsRatingBar from '../StarsRatingBar';

const commonProps = {
  // use for repeated props across the tests (e.g. {buttonText: 'examples.js'})
};

const tests = [
  {
    describe: 'sanity', // prop name (e.g. size)
    its: [
      {
        it: 'default', // prop variation (e.g. small)
        props: {
          // the simulation (e.g. {size: "small"})
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${StarsRatingBar.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <StarsRatingBar {...commonProps} {...props} />);
  });
});
