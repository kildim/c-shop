import {ThunkAction} from '@reduxjs/toolkit';
import {RootState} from '../../index';
import {checkResponse} from '../../helpers/check-response';
import {RootReducerActions} from '../../store/reducers/root-reducer';
import {
  loadCameras,
  loadPromo,
  setApiError,
  setIsCamerasLoading,
  setIsNewReviewShown,
  setIsNewReviewSuccessShown,
  setIsReviewPosting,
  setPagesCount
} from '../../store/reducers/cameras/cameras-actions';
import {CAMERAS_URL, POST_REVIEW_URL, PROMO_URL} from '../../constants/url';

import {calculatePages} from '../../helpers/calculate-pages';
import {Promo} from '../../types/promo';
import {Camera} from '../../types/camera';
import {ReviewPostData} from '../../types/review-post-data';
import axios from 'axios';

const fetchInitData = (): ThunkAction<void, RootState, unknown, RootReducerActions> => (dispatch, _getState) => {
  dispatch(setIsCamerasLoading(true));
  axios.all([CAMERAS_URL, PROMO_URL].map((url) => axios.get(url, {validateStatus: (status) => status < 300})))
    .then((parsedResponses) => {
      const cameras = parsedResponses[0].data as Camera [];
      const promo = parsedResponses[1].data as Promo;
      dispatch(loadCameras(cameras));
      dispatch(setPagesCount(calculatePages(cameras.length)));
      dispatch(loadPromo(promo));
      dispatch(setIsCamerasLoading(false));
    })
    .catch((error) => {
      dispatch(setIsCamerasLoading(false));
      dispatch(setApiError(error as Response));
    });
};
const postReview = (review: ReviewPostData): ThunkAction<void, RootState, unknown, RootReducerActions> => (dispatch, _getState) => {
  dispatch(setIsReviewPosting(true));

  axios.post(POST_REVIEW_URL, review)
    .then(() => {
      dispatch(setIsReviewPosting(false));
      dispatch(setIsNewReviewShown(false));
      dispatch(setIsNewReviewSuccessShown(true));
    })
    .catch((error) => {
      dispatch(setIsReviewPosting(false));
      dispatch(setIsNewReviewShown(false));
      dispatch(setApiError(error as Response));
    });
};

const fetchProduct = (id: string) => fetch(`${CAMERAS_URL}/${id}`).then(checkResponse);
const fetchSimilar = (id: string) => fetch(`${CAMERAS_URL}/${id}/similar`).then(checkResponse);
const fetchReviews = (id: string) => fetch(`${CAMERAS_URL}/${id}/reviews`).then(checkResponse);

export {fetchInitData, fetchProduct, fetchSimilar, fetchReviews, postReview};
