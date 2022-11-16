import {createAction} from '@reduxjs/toolkit';
import {Camera} from '../../../types/camera';
import {Promo} from '../../../types/promo';
import {ActionType} from '../../../types/action-type';

const loadCameras = createAction(
  ActionType.LoadCameras, (cameras: Camera []) => ({
    payload: cameras,
  }),
);

const loadPromo = createAction(
  ActionType.LoadPromo, (promo: Promo) => ({
    payload: promo,
  }),
);

const setBuyPopupShown = createAction(
  ActionType.SetIsBuyPopupShown, (id: number | null) => ({
    payload: id
  })
);

const setIsReviewPosting = createAction(
  ActionType.SetIsReviewPosting, (isReviewPosting: boolean) => ({
    payload: isReviewPosting
  })
);

const setApiError = createAction(
  ActionType.SetApiError, (apiError: string | null ) => ({
    payload: apiError
  })
);

const setIsNewReviewSuccessShown = createAction(
  ActionType.SetIsNewReviewSuccessShown, (isNewReviewSuccessShown: boolean) => ({
    payload: isNewReviewSuccessShown
  })
);

const setIsNewReviewShown = createAction(
  ActionType.SetIsNewReviewShown, (isNewReviewShown: boolean) => ({
    payload: isNewReviewShown
  })
);

export type CamerasActions =
  ReturnType<typeof loadCameras>
  | ReturnType<typeof loadPromo>
  | ReturnType<typeof setBuyPopupShown>
  | ReturnType<typeof setIsReviewPosting>
  | ReturnType<typeof setApiError>
  | ReturnType<typeof setIsNewReviewSuccessShown>
  | ReturnType<typeof setIsNewReviewShown>

export {
  setBuyPopupShown,
  loadPromo,
  loadCameras,
  setIsReviewPosting,
  setApiError,
  setIsNewReviewSuccessShown,
  setIsNewReviewShown,
};
