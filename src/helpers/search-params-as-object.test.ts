import {searchParamsAsObject} from './search-params-as-object';

describe('Test searchParamsAsObject()', () => {
  const testingUrlSearchParams = new URLSearchParams('test-param=test-param-value');
  it('should return  search params as object', () => {
    expect(searchParamsAsObject(testingUrlSearchParams)).toEqual({'test-param': 'test-param-value'});
  });
});
