import {combineReducers} from '@reduxjs/toolkit';
import {ApiActions} from './api/api-actions';


export enum NameSpace {
  Api = 'API',
}

export const rootReducer = combineReducers({

});

export type RootReducerType = ReturnType<typeof rootReducer>;
export type RootReducerActions = ApiActions;
