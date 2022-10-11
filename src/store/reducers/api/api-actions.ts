import {createAction} from '@reduxjs/toolkit';
import {Camera} from '../../../types/camera';

export const loadCameras = createAction(
  'api/loadCameras', (cameras: Camera []) => ({
    payload: cameras,
  }),
);

export const setIsCamerasLoading = createAction(
  'api/setIsCamerasLoading', (isLoading: boolean) => ({
    payload: isLoading,
  })
);

export type ApiActions =
  ReturnType<typeof loadCameras>
| ReturnType<typeof setIsCamerasLoading>
