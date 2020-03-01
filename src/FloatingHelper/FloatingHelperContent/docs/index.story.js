import React from 'react';
import FloatingHelperContent from '..';
import { storySettings } from './storySettings';
import Image from 'wix-ui-icons-common/Image';

const image = (
  <Image style={{ backgroundColor: 'white' }} width="102" height="102" />
);

const componentProps = {
  title: 'This is the title',
  body: 'This is the a long text which is passed in the `body` property',
  actionText: 'Ok, Take Me There!',
  onActionClick: () => null,
};

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: FloatingHelperContent,
  componentPath: '..',
  displayName: 'FloatingHelper.Content',
  componentProps,
  exampleProps: {
    onActionClick: () => 'Action clicked!',
    actionTheme: ['white', 'premium'],
    image: [{ label: 'with image', value: image }],
  },
  exampleImport:
    'import ... - do not import directly, use FloatingHelper.Content',
};
