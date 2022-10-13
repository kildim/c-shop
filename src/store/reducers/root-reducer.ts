import {combineReducers} from '@reduxjs/toolkit';
import {CamerasActions} from './cameras/cameras-actions';
import {camerasReducer} from './cameras/cameras-reducer';


export enum NameSpace {
  Cameras = 'CAMERAS',
}

export const rootReducer = combineReducers({
  [NameSpace.Cameras]: camerasReducer
});

export type RootReducerType = ReturnType<typeof rootReducer>;
export type RootReducerActions = CamerasActions;
