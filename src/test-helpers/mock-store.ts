import { configureMockStore } from '@jedmao/redux-mock-store'
import thunk from 'redux-thunk'

import {RootReducerActions} from '../store/reducers/root-reducer';
import {ThunkAppDispatch} from '../types/thunk-app-dispatch';
import {RootState} from '../index';

const middlewares = [thunk]

export default configureMockStore<RootState,
  RootReducerActions,
  ThunkAppDispatch>(middlewares);
