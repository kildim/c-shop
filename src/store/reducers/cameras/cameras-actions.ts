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

const setBuyPopupShown = createAction(
  'cameras/setDetailedShown', (id: number | null) => ({
    payload: id
  })
);

const setIsReviewPosting = createAction(
  'cameras/setIsReviewPosting', (isReviewPosting: boolean) => ({
    payload: isReviewPosting
  })
);

const setApiError = createAction(
  'cameras/setApiError', (apiError: Response | null) => ({
    payload: apiError
  })
);

export type CamerasActions =
  ReturnType<typeof loadCameras>
  | ReturnType<typeof setIsCamerasLoading>
  | ReturnType<typeof setPagesCount>
  | ReturnType<typeof loadPromo>
  | ReturnType<typeof setBuyPopupShown>
  | ReturnType<typeof setIsReviewPosting>
  | ReturnType<typeof setApiError>

export {setBuyPopupShown, setPagesCount, setIsCamerasLoading, loadPromo, loadCameras, setIsReviewPosting, setApiError};
