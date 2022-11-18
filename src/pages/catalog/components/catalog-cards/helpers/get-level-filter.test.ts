import {FilterSearchParam} from '../../../../../types/filter-search-param';
import {Camera} from '../../../../../types/camera';
import {mockCamera} from '../../../../../test-helpers/mock-camera';
import {getCategoryFilter} from './get-category-filter';

describe('Test getLevelFilter():', () => {
  it('should return function that returns true if param is "novice"', () => {
    const testUrlSearchParams = new URLSearchParams(`${FilterSearchParam.Novice}=${FilterSearchParam.Novice}`);
    const testCamera: Camera = {...mockCamera, level: FilterSearchParam.Novice};
    expect(getCategoryFilter(testUrlSearchParams)(testCamera)).toBe(true);
  });
  it('should return function that returns true if param is "hobby"', () => {
    const testUrlSearchParams = new URLSearchParams(`${FilterSearchParam.Hobby}=${FilterSearchParam.Hobby}`);
    const testCamera: Camera = {...mockCamera, level: FilterSearchParam.Hobby};
    expect(getCategoryFilter(testUrlSearchParams)(testCamera)).toBe(true);
  });
  it('should return function that returns true if param is "professional"', () => {
    const testUrlSearchParams = new URLSearchParams(`${FilterSearchParam.Professional}=${FilterSearchParam.Professional}`);
    const testCamera: Camera = {...mockCamera, level: FilterSearchParam.Professional};
    expect(getCategoryFilter(testUrlSearchParams)(testCamera)).toBe(true);
  });
  it('should return function that returns true all level params are "null"', () => {
    const testUrlSearchParams = new URLSearchParams('');
    const testCamera: Camera = {...mockCamera, level: FilterSearchParam.Professional};
    expect(getCategoryFilter(testUrlSearchParams)(testCamera)).toBe(true);
  });
});
