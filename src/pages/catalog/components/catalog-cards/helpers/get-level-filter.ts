import {FilterSearchParam} from '../../../../../types/filter-search-param';
import {Camera} from '../../../../../types/camera';

export function getLevelFilter(searchString: URLSearchParams) {
  const noviceParam = searchString.get(FilterSearchParam.Novice);
  const hobbyParam = searchString.get(FilterSearchParam.Hobby);
  const professionalParam = searchString.get(FilterSearchParam.Professional);

  return (camera: Camera) =>
    (noviceParam !== null && camera.level === noviceParam)
    || (hobbyParam !== null && camera.level === hobbyParam)
    || (professionalParam !== null && camera.level === professionalParam)
    || (noviceParam === null && hobbyParam === null && professionalParam === null);
}
