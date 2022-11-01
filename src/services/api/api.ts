import {ThunkAction} from '@reduxjs/toolkit';
import {RootState} from '../../index';
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
import axios, {AxiosError} from 'axios';
import {Review} from '../../types/review';

const fetchInitData = (): ThunkAction<void, RootState, unknown, RootReducerActions> => async (dispatch, _getState) => {
  dispatch(setIsCamerasLoading(true));

  try {
    const parsedResponses = await axios.all([CAMERAS_URL, PROMO_URL].map((url) => axios.get(url, {validateStatus: (status) => status < 300})));
    const cameras = parsedResponses[0].data as Camera [];
    const promo = parsedResponses[1].data as Promo;
    dispatch(loadCameras(cameras));
    dispatch(setPagesCount(calculatePages(cameras.length)));
    dispatch(loadPromo(promo));
    dispatch(setIsCamerasLoading(false));
  } catch (error) {
    const {message} = error as AxiosError;
    dispatch(setIsCamerasLoading(false));
    dispatch(setApiError(message));
  }
};

const postReview = (review: ReviewPostData): ThunkAction<void, RootState, unknown, RootReducerActions> => async (dispatch, _getState) => {
  dispatch(setIsReviewPosting(true));

  try {
    await axios.post(POST_REVIEW_URL, review);

    dispatch(setIsReviewPosting(false));
    dispatch(setIsNewReviewShown(false));
    dispatch(setIsNewReviewSuccessShown(true));
  } catch (error) {
    const {message} = error as AxiosError;
    dispatch(setIsReviewPosting(false));
    dispatch(setIsNewReviewShown(false));
    dispatch(setApiError(message));
  }
};

const fetchProduct = (id: string) => axios(`${CAMERAS_URL}/${id}`).then((response) => response.data as Camera).catch((error: AxiosError) => Promise.reject(error.message));
const fetchSimilar = (id: string) => axios(`${CAMERAS_URL}/${id}/similar`).then((response) => response.data as Camera[]).catch((error: AxiosError) => Promise.reject(error.message));
const fetchReviews = (id: string) => axios(`${CAMERAS_URL}/${id}/reviews`).then((response) => response.data as Review[]).catch((error: AxiosError) => Promise.reject(error.message));

export {fetchInitData, fetchProduct, fetchSimilar, fetchReviews, postReview};
