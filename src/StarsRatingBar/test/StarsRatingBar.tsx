import * as React from 'react';
import StarsRatingBar from '..';
import { starsRatingBarTestkitFactory } from '../../../testkit';
import { starsRatingBarTestkitFactory as starsRatingBarEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { starsRatingBarTestkitFactory as starsRatingBarPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function starsRatingBarWithMandatoryProps() {
  return <StarsRatingBar />;
}

function starsRatingBarWithAllProps() {
  return (
    <StarsRatingBar
      dataHook="dataHook"
      className="className"
    />
  );
}

async function testkits() {
  const testkit = starsRatingBarTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = starsRatingBarEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await starsRatingBarPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
