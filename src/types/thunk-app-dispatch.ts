import {ThunkDispatch} from '@reduxjs/toolkit';
import {RootReducerType} from '../store/reducers/root-reducer';
import {CamerasActions} from '../store/reducers/cameras/cameras-actions';

export type ThunkAppDispatch = ThunkDispatch<
  RootReducerType,
  null,
  CamerasActions
  >;
