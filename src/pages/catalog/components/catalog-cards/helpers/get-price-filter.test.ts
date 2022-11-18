import {Camera} from '../../../../../types/camera';
import {mockCamera} from '../../../../../test-helpers/mock-camera';
import {getCategoryFilter} from './get-category-filter';

describe('Test getPriceFilter():', () => {
  it('should return that returns true in case "minPrice" and "maxPrice" are "null"', () => {
    const testUrlSearchParams = new URLSearchParams();
    const testCamera: Camera = {...mockCamera};
    expect(getCategoryFilter(testUrlSearchParams)(testCamera)).toBe(true);
  });
  it('should return that returns false in case camera price higher "minPrice" and lower "maxPrice"', () => {
    const testUrlSearchParams = new URLSearchParams('min-price=1&max-price=2');
    const testCamera: Camera = {...mockCamera, price: 2};
    expect(getCategoryFilter(testUrlSearchParams)(testCamera)).toBe(true);
  });
});
