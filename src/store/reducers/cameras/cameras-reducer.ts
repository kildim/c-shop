import {createReducer} from '@reduxjs/toolkit';
import {
  addToCart,
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
    .addCase(addToCart, (state, action) => {
      state.cart[action.payload] = Object.hasOwn(state.cart, action.payload) ? state.cart[action.payload] + 1 : 1;
    })
    .addCase(setIsSuccessfulAddToBasketShown, (state, action) => {
      state.isSuccessfulAddToBasketShown = action.payload;
    });
});
