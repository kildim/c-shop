import {
  increaseCart,
  decreaseCart,
  setApiError,
  setBuyPopupShown,
  setIsNewReviewShown,
  setIsNewReviewSuccessShown,
  setIsReviewPosting,
  setIsSuccessfulAddToBasketShown
} from './cameras-actions';
import {camerasReducer} from './cameras-reducer';
import {CamerasReducer} from '../../../types/cameras-reducer';

describe ('CamerasReducer:', () => {
  it('Should return initial state if call reducer using undefined store and unknown action', () => {
    const initialState = {
      isCameraLoading: false,
      buyPopupShown: null,
      cart: {},
      isReviewPosting: false,
      apiError: null,
      isNewReviewSuccessShown: false,
      isNewReviewShown: false,
      isSuccessfulAddToBasketShown: false
    };

    expect(camerasReducer(void 0, {type: 'UNKNOWN_ACTION'})).toEqual(initialState);
  });

  describe ( 'setBuyPopupShown case:', () => {
    it('Should set buyPopupShown true if setBuyPopupShown receive Number', () => {
      const state = {buyPopupShown: null} as CamerasReducer;
      const fakeBuyPopupShown = 1;
      expect(camerasReducer(state, setBuyPopupShown(fakeBuyPopupShown))).toEqual({buyPopupShown: fakeBuyPopupShown});
    });
  });

  describe ( 'setIsReviewPosting case:', () => {
    it('Should set isReviewPosting true if setIsReviewPosting receive true', () => {
      const state = {isReviewPosting: false} as CamerasReducer;
      expect(camerasReducer(state, setIsReviewPosting(true))).toEqual({isReviewPosting: true});
    });
    it('Should set isCameraLoading false if setIsReviewPosting receive false', () => {
      const state = {isReviewPosting: true} as CamerasReducer;
      expect(camerasReducer(state, setIsReviewPosting(false))).toEqual({isReviewPosting: false});
    });
  });

  describe ( 'setApiError case:', () => {
    it('Should set buyPopupShown true if setApiError receive Number', () => {
      const state = {apiError: null} as CamerasReducer;
      const fakeError = 'It is a Fake Error';
      expect(camerasReducer(state, setApiError(fakeError))).toEqual({apiError: fakeError});
    });
  });

  describe ( 'setIsNewReviewSuccessShown case:', () => {
    it('Should set isNewReviewSuccessShown true if setIsNewReviewSuccessShown receive true', () => {
      const state = {isNewReviewSuccessShown: false} as CamerasReducer;
      expect(camerasReducer(state, setIsNewReviewSuccessShown(true))).toEqual({isNewReviewSuccessShown: true});
    });
    it('Should set isNewReviewSuccessShown false if setIsNewReviewSuccessShown receive false', () => {
      const state = {isNewReviewSuccessShown: true} as CamerasReducer;
      expect(camerasReducer(state, setIsNewReviewSuccessShown(false))).toEqual({isNewReviewSuccessShown: false});
    });

    describe ( 'setIsNewReviewShown case:', () => {
      it('Should set isNewReviewShown true if setIsNewReviewShown receive true', () => {
        const state = {isNewReviewShown: false} as CamerasReducer;
        expect(camerasReducer(state, setIsNewReviewShown(true))).toEqual({isNewReviewShown: true});
      });
      it('Should set isNewReviewShown false if setIsNewReviewShown receive false', () => {
        const state = {isNewReviewShown: true} as CamerasReducer;
        expect(camerasReducer(state, setIsNewReviewShown(false))).toEqual({isNewReviewShown: false});
      });
    });

    describe ( 'setIsSuccessfulAddToBasketShown case:', () => {
      it('Should set isSuccessfulAddToBasketShown true if setIsSuccessfulAddToBasketShown receive true', () => {
        const state = {isSuccessfulAddToBasketShown: false} as CamerasReducer;
        expect(camerasReducer(state, setIsSuccessfulAddToBasketShown(true))).toEqual({isSuccessfulAddToBasketShown: true});
      });
      it('Should set isSuccessfulAddToBasketShown false if setIsSuccessfulAddToBasketShown receive false', () => {
        const state = {isSuccessfulAddToBasketShown: true} as CamerasReducer;
        expect(camerasReducer(state, setIsSuccessfulAddToBasketShown(false))).toEqual({isSuccessfulAddToBasketShown: false});
      });
    });

    describe ('increaseCart case:', () => {
      it('Should set increase Cart by one in case Cart contain the exact item:', () => {
        const state = {cart: {13: 31}} as unknown as CamerasReducer;
        expect(camerasReducer(state, increaseCart(13))).toEqual({cart: {'13': 32}});
      });
      it('Should set create a new one item in the Cart in case Cart does not contain the item:', () => {
        const state = {cart: {13: 31}} as unknown as CamerasReducer;
        expect(camerasReducer(state, increaseCart(1))).toEqual({cart: {'1': 1, '13': 31}});
      });
    });
    describe ('decreaseCart case:', () => {
      it('Should set decrease Cart by one in case Cart contain the exact item:', () => {
        const state = {cart: {13: 31}} as unknown as CamerasReducer;
        expect(camerasReducer(state, increaseCart(13))).toEqual({cart: {'13': 30}});
      });
      it('Should delete item in the Cart in case Cart contain less then two item:', () => {
        const state = {cart: {'1': 2, '13': 1}} as unknown as CamerasReducer;
        expect(camerasReducer(state, decreaseCart(1))).toEqual({cart: {'1': 1,'13': 1}});
        expect(camerasReducer(state, decreaseCart(13))).toEqual({cart: {'1': 1}});
      });
    });
  });
});
