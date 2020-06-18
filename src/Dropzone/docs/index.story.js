import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import Dropzone from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Dropzone,
  componentPath: '..',

  componentProps: {},

  exampleProps: {
    onDrop: files => {},
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${Dropzone.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: 'Defines a region in the page where files can be dropped.',
          }),

          importExample(),

          divider(),

          title('Example'),

          example({
            title: 'Usage',
            text:
              'Sample usage for the Dropzone component. This will create a region in the page where you could drop files onto and do with them as you please.',
            source: [
              // eslint-disable-next-line no-template-curly-in-string
              '<Dropzone onDrop={files => alert(`${files.length} files were dropped!`)}>',
              '  <Dropzone.Overlay>',
              '    <div>Drop your files here!</div>',
              '  </Dropzone.Overlay>',
              '  <Dropzone.Content>',
              '    <div>This is some component or something</div>',
              '  </Dropzone.Content>',
              '</Dropzone>',
            ].join('\n'),
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
