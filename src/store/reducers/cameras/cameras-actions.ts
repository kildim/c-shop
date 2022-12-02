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
const setIsSuccessfulAddToBasketShown = createAction(
  ActionType.SetIsSuccessfulAddToBasketShown, (isSuccessfulAddToBasketShown: boolean) => ({
    payload: isSuccessfulAddToBasketShown
  })
);
const increaseCart = createAction(
  ActionType.IncreaseCart, (itemId: number) => ({
    payload: itemId
  })
);
const decreaseCart = createAction(
  ActionType.DecreaseCart, (itemId: number) => ({
    payload: itemId
  })
);

export type CamerasActions =
  | ReturnType<typeof setBuyPopupShown>
  | ReturnType<typeof setIsReviewPosting>
  | ReturnType<typeof setApiError>
  | ReturnType<typeof setIsNewReviewSuccessShown>
  | ReturnType<typeof setIsNewReviewShown>
  | ReturnType<typeof setIsSuccessfulAddToBasketShown>
  | ReturnType<typeof increaseCart>
  | ReturnType<typeof increaseCart>

export {
  setBuyPopupShown,
  setIsReviewPosting,
  setApiError,
  setIsNewReviewSuccessShown,
  setIsNewReviewShown,
  setIsSuccessfulAddToBasketShown,
  increaseCart,
  decreaseCart,
};
