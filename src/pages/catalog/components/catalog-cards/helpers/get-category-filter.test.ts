import {getCategoryFilter} from './get-category-filter';
import {mockCamera} from '../../../../../test-helpers/mock-camera';
import {FilterSearchParam} from '../../../../../types/filter-search-param';
import {Camera} from '../../../../../types/camera';

describe('Test getCategoryFilter', () => {
  it('should return function that returns true', () => {
    const testUrlSearchParams = new URLSearchParams('');
    const testCamera = mockCamera;
    expect(getCategoryFilter(testUrlSearchParams)(testCamera)).toBe(true);
  });
  it('should return function that returns true if Camera category is photocamera', () => {
    const testUrlSearchParams = new URLSearchParams(`${FilterSearchParam.Photocamera}=${FilterSearchParam.Photocamera}`);
    const testCamera: Camera = {...mockCamera, category: FilterSearchParam.Photocamera};
    expect(getCategoryFilter(testUrlSearchParams)(testCamera)).toBe(true);
  });
  it('should return function that returns true if Camera category is videocamera', () => {
    const testUrlSearchParams = new URLSearchParams(`${FilterSearchParam.Videocamera}=${FilterSearchParam.Videocamera}`);
    const testCamera: Camera = {...mockCamera, category: FilterSearchParam.Videocamera};
    expect(getCategoryFilter(testUrlSearchParams)(testCamera)).toBe(true);
  });
});
