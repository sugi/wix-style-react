import { extractAttributes, extractDataAttributes } from './extractAttributes';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';

describe('extractAttributes', () => {
  it('should return all attributes when no prefix is passed', () => {
    const props = { skin: 'dark', color: 'red' };
    const result = extractAttributes(props);
    expect(isEqual(result, props)).toEqual(true);
  });

  it('should return no attributes when none start with the provided prefix', () => {
    const props = { skin: 'dark', color: 'red' };
    const result = extractAttributes(props, 'bla');
    expect(isEmpty(result)).toEqual(true);
  });

  it('should return only attributes that start with the provided prefix', () => {
    const props = { mySkin: 'dark', myColor: 'red', yourSmell: 'stink' };
    const result = extractAttributes(props, 'my');
    expect(Object.keys(result).length).toEqual(2);
    expect(result.mySkin).toEqual(props.mySkin);
    expect(result.myColor).toEqual(props.myColor);
    expect(result.yourSmell).not.toBeDefined();
  });
});

describe('extractDataAttributes', () => {
  it('should return only attributes that start with `data-`', function() {
    const props = {
      'data-att1': 'att1',
      'data-att2': 'att2',
      'no-data-att': 'att',
    };
    const result = extractDataAttributes(props);
    expect(Object.keys(result).length).toEqual(2);
    expect(result['data-att1']).toBeDefined();
    expect(result['data-att2']).toBeDefined();
    expect(result['no-data-att']).not.toBeDefined();
  });
});
