// import {SortingSearchParam} from '../../../../../types/sorting-search-param';
// import {Sorting} from '../../../../../types/sorting';
// import {Direction} from '../../../../../types/direction';
// import {Camera} from '../../../../../types/camera';
//
// function getSortFunction(searchString: URLSearchParams) {
//   let sorting = searchString.get(SortingSearchParam.Sorting);
//   let direction = searchString.get(SortingSearchParam.Direction);
//
//   if (direction !== null) {
//     sorting = sorting === null ? Sorting.Price : sorting;
//   }
//   if (sorting !== null) {
//     direction = direction === null ? Direction.Asc : direction;
//   }
//   if (sorting === null && direction === null) {
//     return () => 0;
//   }
//   if (sorting === Sorting.Price) {
//     switch (direction) {
//       case Direction.Asc:
//         return (firstValue: Camera, secondValue: Camera) => firstValue.price - secondValue.price;
//       case Direction.Desc:
//         return (firstValue: Camera, secondValue: Camera) => secondValue.price - firstValue.price;
//     }
//   }
//   if (sorting === Sorting.Popularity) {
//     switch (direction) {
//       case Direction.Asc:
//         return (firstValue: Camera, secondValue: Camera) => firstValue.rating - secondValue.rating;
//       case Direction.Desc:
//         return (firstValue: Camera, secondValue: Camera) => secondValue.rating - firstValue.rating;
//     }
//   }
// }
//
// export default getSortFunction;
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
