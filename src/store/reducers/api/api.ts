import {createReducer} from '@reduxjs/toolkit';
import {Camera} from '../../../types/camera';
import {setIsCamerasLoading} from './api-actions';


type ApiReducer = {
  isCameraLoading: boolean,
  cameras: Camera [],
}

const initialState = {
  isCameraLoading: false,
  cameras: [],
}

export const apiReducer = createReducer<ApiReducer>(initialState, (builder) => {
  builder
    .addCase(setIsCamerasLoading, (state, action) => {
      state.isCameraLoading = action.payload;
    })
})
