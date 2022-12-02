import {createReducer} from '@reduxjs/toolkit';
import {
  decreaseCart,
  increaseCart,
  setApiError,
  setBuyPopupShown,
  setIsNewReviewShown,
  setIsNewReviewSuccessShown,
  setIsReviewPosting,
  setIsSuccessfulAddToBasketShown,
} from './cameras-actions';
import {CamerasReducer} from '../../../types/cameras-reducer';

const initialState = {
  isCameraLoading: false,
  cart: {},
  buyPopupShown: null,
  isReviewPosting: false,
  apiError: null,
  isNewReviewSuccessShown: false,
  isNewReviewShown: false,
  isSuccessfulAddToBasketShown: false,
};

export const camerasReducer = createReducer<CamerasReducer>(initialState, (builder) => {
  builder
    .addCase(setBuyPopupShown, (state, action) => {
      state.buyPopupShown = action.payload;
    })
    .addCase(setIsReviewPosting, (state, action) => {
      state.isReviewPosting = action.payload;
    })
    .addCase(setApiError, (state, action) => {
      state.apiError = action.payload;
    })
    .addCase(setIsNewReviewSuccessShown, (state, action) => {
      state.isNewReviewSuccessShown = action.payload;
    })
    .addCase(setIsNewReviewShown, (state, action) => {
      state.isNewReviewShown = action.payload;
    })
    .addCase(increaseCart, (state, action) => {
      state.cart[action.payload] = Object.hasOwn(state.cart, action.payload) ? state.cart[action.payload] + 1 : 1;
    })
    .addCase(decreaseCart, (state, action) => {
      if (Object.hasOwn(state.cart, action.payload)) {
        if (state.cart[action.payload] > 0) {
          state.cart[action.payload] = state.cart[action.payload] - 1;
        } else {
          delete state.cart[action.payload];
        }
      }
    })
    .addCase(setIsSuccessfulAddToBasketShown, (state, action) => {
      state.isSuccessfulAddToBasketShown = action.payload;
    });
});
