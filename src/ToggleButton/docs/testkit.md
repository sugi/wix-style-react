# ToggleButton Testkits

> ToggleButton

## ToggleButton TestKit API

| method           | arguments | returned value     | description                        |
| ---------------- | --------- | ------------------ | ---------------------------------- |
| exists           | -         | `Promise<boolean>` | returns true if element in the DOM |
| element          | -         | `Promise<element>` | returns the component element      |
| click            | -         | `Promise<void>`    | clicks on the button               |
| isButtonDisabled | -         | `Promise<boolean>` | returns true if button is disabled |
| isButtonSelected | -         | `Promise<boolean>` | returns true if button is selected |
| getLabelPlacement| -         | `Promise<string>`  | returns label placement value      |
| getLabelValue    | -         | `Promise<string>`  | returns label value                |

## ReactTestUtils Example

```javascript
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ToggleButton from 'wix-style-react/ToggleButton';
import { toggleButtonTestkitFactory } from 'wix-style-react/dist/testkit';

const div = document.createElement('div');
const dataHook = 'myDataHook';

const component = (
  <div>
    <ToggleButton dataHook={dataHook} />
  </div>
);

const wrapper = div.appendChild(
  ReactTestUtils.renderIntoDocument(component, { dataHook }),
);

const testkit = toggleButtonTestkitFactory({ wrapper, dataHook });

//Do tests
describe('Element should exist', async () => {
  expect(await testkit.exists()).toBeTruthy();
});
```

## Enzyme Example

```javascript
import React from 'react';
import { mount } from 'enzyme';
import ToggleButton from 'wix-style-react/ToggleButton';
import { toggleButtonTestkitFactory } from 'wix-style-react/dist/testkit/enzyme';

const dataHook = 'myDataHook';
const wrapper = mount(
  <div>
    <ToggleButton dataHook={dataHook} />
  </div>,
);

const testkit = toggleButtonTestkitFactory({ wrapper, dataHook });

//Do tests
describe('Element should exist', async () => {
  expect(await testkit.exists()).toBeTruthy();
});
```

## Puppeteer Example

> Element should be rendered with a data-hook into the DOM `<ToggleButton dataHook="myDataHook" />`

```javascript
import puppeteer from 'puppeteer';
import { toggleButtonTestkitFactory } from 'wix-style-react/dist/testkit/puppeteer';

//puppeteer setup
const browser = await puppeteer.launch();
const page = await browser.newPage();

//Create an element testkit via the data-hook attribute
const testkit = await toggleButtonTestkitFactory({
  dataHook: 'myDataHook',
  page,
});
await page.goto('/page-where-button-appears'); //Your application url

//Do tests
describe('Element should exist', async () => {
  expect(await testkit.exists()).toBeTruthy();
});
```

## Protractor Example

> Element should be rendered with a data-hook into the DOM `<ToggleButton dataHook="myDataHook" />`

```javascript
import { toggleButtonTestkitFactory } from 'wix-style-react/dist/testkit/protractor';

//Create an element testkit via the data-hook attribute
const testkit = toggleButtonTestkitFactory({ dataHook: 'myDataHook' });

await browser.get('/page-where-button-appears'); //Your application url

//Do tests
describe('Element should exist', async () => {
  expect(await testkit.exists()).toBeTruthy();
});
```
