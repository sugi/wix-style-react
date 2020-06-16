import * as React from 'react';
import Dropzone from '..';
import { dropzoneTestkitFactory } from '../../../testkit';
import { dropzoneTestkitFactory as dropzoneEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { dropzoneTestkitFactory as dropzonePuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function dropzoneWithMandatoryProps() {
  return <Dropzone />;
}

function dropzoneWithAllProps() {
  return (
    <Dropzone
      dataHook="dataHook"
      className="className"
      buttonText="buttonText"
    />
  );
}

async function testkits() {
  const testkit = dropzoneTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = dropzoneEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await dropzonePuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
