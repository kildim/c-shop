import {NameSpace, RootReducerType} from '../root-reducer';
import {Camera} from '../../../types/camera';

const getBuyPopupShown = (state: RootReducerType) => {
  const buyPopupShown = state[NameSpace.Cameras].cameras.find((item: Camera) => item.id === state[NameSpace.Cameras].buyPopupShown);
  return buyPopupShown === undefined ? null : buyPopupShown;
};
const getApiError = (state: RootReducerType) => state[NameSpace.Cameras].apiError;
const getIsNewReviewSuccessShown = (state: RootReducerType) => state[NameSpace.Cameras].isNewReviewSuccessShown;
const getIsNewReviewShown = (state: RootReducerType) => state[NameSpace.Cameras].isNewReviewShown;

export {
  getBuyPopupShown,
  getApiError,
  getIsNewReviewSuccessShown,
  getIsNewReviewShown,
};
