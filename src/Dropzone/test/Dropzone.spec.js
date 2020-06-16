import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import Dropzone from '../Dropzone';
import { dropzonePrivateDriverFactory } from './Dropzone.private.uni.driver';

describe(Dropzone.displayName, () => {
  const render = createRendererWithUniDriver(dropzonePrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<Dropzone />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<Dropzone />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<Dropzone buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
