import {Camera} from '../../../../../types/camera';
import {mockCamera} from '../../../../../test-helpers/mock-camera';
import getSortFunction from './get-sort-function';
import {Sorting} from '../../../../../types/sorting';
import {Direction} from '../../../../../types/direction';
import {SortingSearchParam} from '../../../../../types/sorting-search-param';

describe('Test getSortFun', () => {
  it('should return function that return 0 in case sorting and direction params are null', () => {
    const testUrlSearchParams = new URLSearchParams('');
    const testFirstValue: Camera = {...mockCamera, price: 1, rating: 1};
    const testSecondValue: Camera = {...mockCamera, price: 2, rating: 2};

    expect(getSortFunction(testUrlSearchParams)(testFirstValue, testSecondValue)).toBe(0);
  });
  it('should return function that return -1 in case sorting "price" and not specified direction for specified cameras', () => {
    const testUrlSearchParams = new URLSearchParams(`${SortingSearchParam.Sorting}=${Sorting.Price}`);
    const testFirstValue: Camera = {...mockCamera, price: 1, rating: 1};
    const testSecondValue: Camera = {...mockCamera, price: 2, rating: 2};

    expect(getSortFunction(testUrlSearchParams)(testFirstValue, testSecondValue)).toBe(-1);
  });
  it('should return function that return -1 in case sorting "price" and direction "desc" for specified cameras', () => {
    const testUrlSearchParams = new URLSearchParams(
      `${SortingSearchParam.Sorting}=${Sorting.Price}&${SortingSearchParam.Direction}=${Direction.Desc}`
    );
    const testFirstValue: Camera = {...mockCamera, price: 1, rating: 1};
    const testSecondValue: Camera = {...mockCamera, price: 2, rating: 2};

    expect(getSortFunction(testUrlSearchParams)(testFirstValue, testSecondValue)).toBe(1);
  });
  it('should return function that return -1 in case sorting "price" and direction "asc" for specified cameras', () => {
    const testUrlSearchParams = new URLSearchParams(
      `${SortingSearchParam.Sorting}=${Sorting.Price}&${SortingSearchParam.Direction}=${Direction.Asc}`
    );
    const testFirstValue: Camera = {...mockCamera, price: 1, rating: 1};
    const testSecondValue: Camera = {...mockCamera, price: 2, rating: 2};

    expect(getSortFunction(testUrlSearchParams)(testFirstValue, testSecondValue)).toBe(-1);
  });
  it('should return function that return -1 in case sorting "popularity" and direction "desc" for specified cameras', () => {
    const testUrlSearchParams = new URLSearchParams(
      `${SortingSearchParam.Sorting}=${Sorting.Popularity}&${SortingSearchParam.Direction}=${Direction.Desc}`
    );
    const testFirstValue: Camera = {...mockCamera, price: 1, rating: 1};
    const testSecondValue: Camera = {...mockCamera, price: 2, rating: 2};

    expect(getSortFunction(testUrlSearchParams)(testFirstValue, testSecondValue)).toBe(1);
  });
  it('should return function that return -1 in case sorting "popularity" and direction "asc" for specified cameras', () => {
    const testUrlSearchParams = new URLSearchParams(
      `${SortingSearchParam.Sorting}=${Sorting.Popularity}&${SortingSearchParam.Direction}=${Direction.Asc}`
    );
    const testFirstValue: Camera = {...mockCamera, price: 1, rating: 1};
    const testSecondValue: Camera = {...mockCamera, price: 2, rating: 2};

    expect(getSortFunction(testUrlSearchParams)(testFirstValue, testSecondValue)).toBe(-1);
  });
});
