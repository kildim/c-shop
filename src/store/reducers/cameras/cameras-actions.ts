import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../../../types/action-type';

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
  | ReturnType<typeof setBuyPopupShown>
  | ReturnType<typeof setIsReviewPosting>
  | ReturnType<typeof setApiError>
  | ReturnType<typeof setIsNewReviewSuccessShown>
  | ReturnType<typeof setIsNewReviewShown>

export {
  setBuyPopupShown,
  setIsReviewPosting,
  setApiError,
  setIsNewReviewSuccessShown,
  setIsNewReviewShown,
};
