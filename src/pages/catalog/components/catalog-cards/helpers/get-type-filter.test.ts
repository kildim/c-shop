import {FilterSearchParam} from '../../../../../types/filter-search-param';
import {Camera} from '../../../../../types/camera';
import {mockCamera} from '../../../../../test-helpers/mock-camera';
import {getCategoryFilter} from './get-category-filter';

describe('Test getLevelFilter():', () => {
  it('should return function that returns true if param is "digital"', () => {
    const testUrlSearchParams = new URLSearchParams(`${FilterSearchParam.Digital}=${FilterSearchParam.Digital}`);
    const testCamera: Camera = {...mockCamera, type: FilterSearchParam.Digital};
    expect(getCategoryFilter(testUrlSearchParams)(testCamera)).toBe(true);
  });
  it('should return function that returns true if param is "film"', () => {
    const testUrlSearchParams = new URLSearchParams(`${FilterSearchParam.Film}=${FilterSearchParam.Film}`);
    const testCamera: Camera = {...mockCamera, level: FilterSearchParam.Film};
    expect(getCategoryFilter(testUrlSearchParams)(testCamera)).toBe(true);
  });
  it('should return function that returns true if param is "professional"', () => {
    const testUrlSearchParams = new URLSearchParams(`${FilterSearchParam.Instant}=${FilterSearchParam.Instant}`);
    const testCamera: Camera = {...mockCamera, level: FilterSearchParam.Instant};
    expect(getCategoryFilter(testUrlSearchParams)(testCamera)).toBe(true);
  });
  it('should return function that returns true if param is "collection"', () => {
    const testUrlSearchParams = new URLSearchParams(`${FilterSearchParam.Collection}=${FilterSearchParam.Collection}`);
    const testCamera: Camera = {...mockCamera, level: FilterSearchParam.Collection};
    expect(getCategoryFilter(testUrlSearchParams)(testCamera)).toBe(true);
  });
  it('should return function that returns true all level params are "null"', () => {
    const testUrlSearchParams = new URLSearchParams('');
    const testCamera: Camera = {...mockCamera};
    expect(getCategoryFilter(testUrlSearchParams)(testCamera)).toBe(true);
  });
});
