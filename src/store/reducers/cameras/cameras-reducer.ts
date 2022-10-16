import {createReducer} from '@reduxjs/toolkit';
import {loadCameras, loadPromo, setIsCamerasLoading, setPagesCount} from './cameras-actions';
import {CamerasReducer} from '../../../types/cameras-reducer';

const initialState = {
  isCameraLoading: false,
  cameras: [],
  pagesCount: 0,
  promo: null,
  detailedShown: null
};

export const camerasReducer = createReducer<CamerasReducer>(initialState, (builder) => {
  builder
    .addCase(setIsCamerasLoading, (state, action) => {
      state.isCameraLoading = action.payload;
    })
    .addCase(loadCameras, (state, action) => {
      state.cameras = action.payload;
    })
    .addCase(setPagesCount, (state, action) => {
      state.pagesCount = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    });
});