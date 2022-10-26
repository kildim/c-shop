import {NameSpace, RootReducerType} from '../root-reducer';
import {Camera} from '../../../types/camera';
import {Promo} from '../../../types/promo';

const getCameras = (state: RootReducerType): Camera[] => state[NameSpace.Cameras].cameras;
const getPromo = (state: RootReducerType): Promo => state[NameSpace.Cameras].promo;
const getPagesCount = (state: RootReducerType): number => state[NameSpace.Cameras].pagesCount;
const getBuyPopupShown = (state: RootReducerType) => {
  const buyPopupShown = state[NameSpace.Cameras].cameras.find((item: Camera) => item.id === state[NameSpace.Cameras].buyPopupShown);
  return buyPopupShown === undefined ? null : buyPopupShown;
};
const getIsCamerasLoading = (state: RootReducerType): boolean => state[NameSpace.Cameras].isCameraLoading;
const getApiError = (state: RootReducerType) => state[NameSpace.Cameras].apiError;

export {getCameras, getPromo, getPagesCount, getBuyPopupShown, getIsCamerasLoading, getApiError};
