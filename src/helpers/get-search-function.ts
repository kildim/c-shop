import {SortingSearchParam} from '../types/sorting-search-param';
import {Sorting} from '../types/sorting';
import {Direction} from '../types/direction';
import {Camera} from '../types/camera';

function getSortFunction(searchString: URLSearchParams) {
  let sorting = searchString.get(SortingSearchParam.Sorting);
  let direction = searchString.get(SortingSearchParam.Direction);

  if (direction !== null) {
    sorting = sorting === null ? Sorting.Price : sorting;
  }
  if (sorting !== null) {
    direction = direction === null ? Direction.Asc : direction;
  }
  if (sorting === null && direction === null) {
    return () => 0;
  }
  if (sorting === Sorting.Price) {
    switch (direction) {
      case Direction.Asc:
        return (firstValue: Camera, secondValue: Camera) => firstValue.price - secondValue.price;
      case Direction.Desc:
        return (firstValue: Camera, secondValue: Camera) => secondValue.price - firstValue.price;
    }
  }
  if (sorting === Sorting.Popularity) {
    switch (direction) {
      case Direction.Asc:
        return (firstValue: Camera, secondValue: Camera) => firstValue.rating - secondValue.rating;
      case Direction.Desc:
        return (firstValue: Camera, secondValue: Camera) => secondValue.rating - firstValue.rating;
    }
  }
}

export default getSortFunction;
