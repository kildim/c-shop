import {FilterSearchParam} from '../../../../../types/filter-search-param';
import {Camera} from '../../../../../types/camera';

export function getTypeFilter(searchString: URLSearchParams) {
  const paramDigital = searchString.get(FilterSearchParam.Digital);
  const paramFilm = searchString.get(FilterSearchParam.Film);
  const paramInstant = searchString.get(FilterSearchParam.Instant);
  const paramCollection = searchString.get(FilterSearchParam.Collection);

  return (camera: Camera) =>
    (paramDigital !== null && camera.type === paramDigital)
    || (paramFilm !== null && camera.type === paramFilm)
    || (paramInstant !== null && camera.type === paramInstant)
    || (paramCollection !== null && camera.type === paramCollection)
    || (paramDigital === null && paramFilm === null && paramInstant === null && paramCollection === null);
}
