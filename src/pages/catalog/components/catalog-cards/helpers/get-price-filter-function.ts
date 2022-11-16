import {FilterSearchParam} from '../../../../../types/filter-search-param';
import {Camera} from '../../../../../types/camera';

function getPriceFilterFunction(searchString: URLSearchParams) {
  const minPrice = searchString.get(FilterSearchParam.MinPrice);
  const maxPrice = searchString.get(FilterSearchParam.MaxPrice);

  if (minPrice === null || maxPrice === null) {
    return () => true;
  }

  return (camera: Camera) => camera.price >= Number(minPrice) && camera.price <= Number(maxPrice);
}

export default getPriceFilterFunction;
