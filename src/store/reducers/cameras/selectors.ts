import {NameSpace, RootReducerType} from '../root-reducer';
const getBuyPopupShown = (state: RootReducerType) => state[NameSpace.Cameras].buyPopupShown;

const getApiError = (state: RootReducerType) => state[NameSpace.Cameras].apiError;
const getIsNewReviewSuccessShown = (state: RootReducerType) => state[NameSpace.Cameras].isNewReviewSuccessShown;
const getIsNewReviewShown = (state: RootReducerType) => state[NameSpace.Cameras].isNewReviewShown;
const getIsSuccessfulAddToBasket = (state: RootReducerType) => state[NameSpace.Cameras].isSuccessfulAddToBasketShown;
const getCart = (state: RootReducerType): {[index: number]: number} => state[NameSpace.Cameras].cart;

export {
  getBuyPopupShown,
  getApiError,
  getIsNewReviewSuccessShown,
  getIsNewReviewShown,
  getIsSuccessfulAddToBasket,
  getCart,
};
