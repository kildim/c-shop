import {NameSpace, RootReducerType} from '../root-reducer';
const getBuyPopupShown = (state: RootReducerType) => state[NameSpace.Cameras].buyPopupShown;

const getApiError = (state: RootReducerType) => state[NameSpace.Cameras].apiError;
const getIsNewReviewSuccessShown = (state: RootReducerType) => state[NameSpace.Cameras].isNewReviewSuccessShown;
const getIsNewReviewShown = (state: RootReducerType) => state[NameSpace.Cameras].isNewReviewShown;
const getIsSuccessfulAddToBasket = (state: RootReducerType) => state[NameSpace.Cameras].isSuccessfulAddToBasketShown;
const getCart = (state: RootReducerType) => state[NameSpace.Cameras].cart;
const getCartCount = (state: RootReducerType) => {
  const cartCountsArray = Object.values(state[NameSpace.Cameras].cart);
  return cartCountsArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

export {
  getBuyPopupShown,
  getApiError,
  getIsNewReviewSuccessShown,
  getIsNewReviewShown,
  getIsSuccessfulAddToBasket,
  getCart,
  getCartCount,
};
