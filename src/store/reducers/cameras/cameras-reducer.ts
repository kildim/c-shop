import {createReducer} from '@reduxjs/toolkit';
import {
  decreaseCart,
  increaseCart,
  assertCart,
  removeCart,
  setApiError,
  setBuyPopupShown,
  setIsNewReviewShown,
  setIsNewReviewSuccessShown,
  setIsReviewPosting,
  setIsSuccessfulAddToBasketShown, setRemoveCartItemDialogShown,
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
  removeCartItemDialogShown: null,
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
      if (state.cart[action.payload] > 99) {state.cart[action.payload] = 99;}
    })
    .addCase(decreaseCart, (state, action) => {
      if (Object.hasOwn(state.cart, action.payload)) {
        state.cart[action.payload] = state.cart[action.payload] > 1 ? state.cart[action.payload] - 1 : 0;
      }
    })
    .addCase(assertCart, (state, action) => {
      const resultCart = {...state.cart};
      resultCart[action.payload.id] = action.payload.count;
      state.cart = resultCart;
    })
    .addCase(removeCart, (state, action) => {
      delete state.cart[action.payload];
    })
    .addCase(setRemoveCartItemDialogShown, (state, action) => {
      state.removeCartItemDialogShown = action.payload;
    })
    .addCase(setIsSuccessfulAddToBasketShown, (state, action) => {
      state.isSuccessfulAddToBasketShown = action.payload;
    });
});
