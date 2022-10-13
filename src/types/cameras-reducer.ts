import {Camera} from './camera';
import {Promo} from './promo';


export type CamerasReducer = {
  isCameraLoading: boolean,
  cameras: Camera [],
  pagesCount: number,
  activePage: number,
  promo: Promo,
};
