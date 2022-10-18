import {NameSpace, RootReducerType} from '../root-reducer';
import {Camera} from '../../../types/camera';
import {Promo} from '../../../types/promo';

export const getCameras = (state: RootReducerType): Camera[] => state[NameSpace.Cameras].cameras;
export const getPromo = (state: RootReducerType): Promo => state[NameSpace.Cameras].promo;
export const getPagesCount = (state: RootReducerType): number => state[NameSpace.Cameras].pagesCount;
export const getBuyPopupShown = (state: RootReducerType) => {
  const buyPopupShown = state[NameSpace.Cameras].cameras.find((item: Camera) => item.id === state[NameSpace.Cameras].buyPopupShown);
  return buyPopupShown === undefined ? null : buyPopupShown;
};
