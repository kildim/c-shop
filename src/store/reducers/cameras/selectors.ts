import {NameSpace, RootReducerType} from '../root-reducer';
import {Camera} from '../../../types/camera';
import {Promo} from '../../../types/promo';

export const getCameras = (state: RootReducerType): Camera[] => state[NameSpace.Cameras].cameras;
export const getPromo = (state: RootReducerType): Promo => state[NameSpace.Cameras].promo;
export const getPagesCount = (state: RootReducerType): number => state[NameSpace.Cameras].pagesCount;
