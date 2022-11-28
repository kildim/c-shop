import {
  setApiError,
  setBuyPopupShown,
  setIsNewReviewShown,
  setIsNewReviewSuccessShown,
  setIsReviewPosting,
} from './cameras-actions';
import {camerasReducer} from './cameras-reducer';
import {CamerasReducer} from '../../../types/cameras-reducer';

describe ('CamerasReducer:', () => {
  it('Should return initial state if call reducer using undefined store and unknown action', () => {
    const initialState = {
      isCameraLoading: false,
      buyPopupShown: null,
      cameras: [],
      isReviewPosting: false,
      apiError: null,
      isNewReviewSuccessShown: false,
      isNewReviewShown: false,
      pagesCount: 0,
      promo: null,
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
  });
});
