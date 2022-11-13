import {fetchCameras, fetchPromo} from '../../services/api/api';

import {Promo} from '../../types/promo';
import {Camera} from '../../types/camera';

// type CatalogLoaderProps = {
//   searchParams: URLSearchParams
// }

const catalogLoader = async () => {
  const cameras: Camera[] = await fetchCameras(new URLSearchParams());
  const promo: Promo = await fetchPromo();
  return {
    cameras: cameras,
    promo: promo,
  };
};

export {catalogLoader};
