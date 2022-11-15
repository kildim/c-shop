import {createReducer} from '@reduxjs/toolkit';
import {
  loadCameras,
  loadPromo, setApiError,
  setBuyPopupShown,
  setIsNewReviewShown,
  setIsNewReviewSuccessShown,
  setIsReviewPosting,
} from './cameras-actions';
import {CamerasReducer} from '../../../types/cameras-reducer';

const initialState = {
  isCameraLoading: false,
  cameras: [],
  pagesCount: 0,
  promo: null,
  buyPopupShown: null,
  isReviewPosting: false,
  apiError: null,
  isNewReviewSuccessShown: false,
  isNewReviewShown: false,
};

export const camerasReducer = createReducer<CamerasReducer>(initialState, (builder) => {
  builder
    .addCase(loadCameras, (state, action) => {
      state.cameras = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
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
    });
});
