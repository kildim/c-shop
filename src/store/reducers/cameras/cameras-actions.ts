import {createAction} from '@reduxjs/toolkit';
import {Camera} from '../../../types/camera';
import {Promo} from '../../../types/promo';

const loadCameras = createAction(
  'cameras/loadCameras', (cameras: Camera []) => ({
    payload: cameras,
  }),
);

const loadPromo = createAction(
  'cameras/loadPromo', (promo: Promo) => ({
    payload: promo,
  }),
);

const setIsCamerasLoading = createAction(
  'cameras/setIsCamerasLoading', (isLoading: boolean) => ({
    payload: isLoading,
  })
);

const setPagesCount = createAction(
  'cameras/setPagesCount', (count: number) => ({
    payload: count
  })
);

const setDetailedShown = createAction(
  'cameras/setDetailedShown', (count: number | null) => ({
    payload: count
  })
);

export type CamerasActions =
  ReturnType<typeof loadCameras>
  | ReturnType<typeof setIsCamerasLoading>
  | ReturnType<typeof setPagesCount>
  | ReturnType<typeof loadPromo>

export {setDetailedShown, setPagesCount, setIsCamerasLoading, loadPromo, loadCameras}
