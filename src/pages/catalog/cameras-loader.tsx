import {fetchCameras} from '../../services/api/api';
import {Camera} from '../../types/camera';

export type CamerasLoaderData = {
  cameras: Camera[];
}

const camerasLoader = async () => {
  const cameras = await fetchCameras(new URLSearchParams());
  return {cameras};
};

export {camerasLoader};
