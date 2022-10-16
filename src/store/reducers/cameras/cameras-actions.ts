import {createAction} from '@reduxjs/toolkit';
import {Camera} from '../../../types/camera';
import {Promo} from '../../../types/promo';

export const loadCameras = createAction(
  'cameras/loadCameras', (cameras: Camera []) => ({
    payload: cameras,
  }),
);

export const loadPromo = createAction(
  'cameras/loadPromo', (promo: Promo) => ({
    payload: promo,
  }),
);

export const setIsCamerasLoading = createAction(
  'cameras/setIsCamerasLoading', (isLoading: boolean) => ({
    payload: isLoading,
  })
);

export const setPagesCount = createAction(
  'cameras/setPagesCount', (count: number) => ({
    payload: count
  })
);

export type CamerasActions =
  ReturnType<typeof loadCameras>
  | ReturnType<typeof setIsCamerasLoading>
  | ReturnType<typeof setPagesCount>
  | ReturnType<typeof loadPromo>
