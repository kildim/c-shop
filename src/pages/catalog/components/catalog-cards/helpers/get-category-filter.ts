import {FilterSearchParam} from '../../../../../types/filter-search-param';
import {Camera} from '../../../../../types/camera';

export function getCategoryFilter(searchString: URLSearchParams) {
  const videocamera = searchString.get(FilterSearchParam.Videocamera);
  const photocamera = searchString.get(FilterSearchParam.Photocamera);

  if (videocamera !== null && photocamera === null) {
    return (camera: Camera) => camera.category === videocamera;
  }
  if (videocamera === null && photocamera !== null) {
    return (camera: Camera) => camera.category === photocamera;
  }
  return () => true;
}
