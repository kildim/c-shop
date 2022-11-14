import {fetchCameras, fetchPromo} from '../../services/api/api';

import {Promo} from '../../types/promo';
import {Camera} from '../../types/camera';

export type CatalogLoaderData = {
  cameras: Camera[];
  promo: Promo;
}

const catalogLoader = async () => {
  const cameras = await fetchCameras(new URLSearchParams());
  const promo = await fetchPromo();
  return {
    cameras: cameras,
    promo: promo,
  };
};

export {catalogLoader};
