import {ThunkAction} from '@reduxjs/toolkit';
import {RootState} from '../../index';
import {RootReducerActions} from '../../store/reducers/root-reducer';
import {
  setApiError, setIsCouponGetting,
  setIsNewReviewShown,
  setIsNewReviewSuccessShown,
  setIsReviewPosting,
} from '../../store/reducers/cameras/cameras-actions';
import {Url} from '../../constants/url';

import {Promo} from '../../types/promo';
import {Camera} from '../../types/camera';
import {ReviewPostData} from '../../types/review-post-data';
import axios, {AxiosError} from 'axios';
import {Review} from '../../types/review';

const postReview = (review: ReviewPostData): ThunkAction<Promise<void>, RootState, unknown, RootReducerActions> => async (dispatch, _getState) => {
  dispatch(setIsReviewPosting(true));

  try {
    await axios.post(Url.PostReview, review);

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
const postCoupon = (coupon: {coupon: string}): ThunkAction<Promise<void>, RootState, unknown, RootReducerActions> => async (dispatch, _getState) => {
  dispatch(setIsCouponGetting(true));

  try {
    console.log('postCoupon')
    const resp = await axios.post(Url.Promo, coupon);
    console.log('RESP:')
    console.log(resp)
    dispatch(setIsCouponGetting(true));

  } catch (error) {
    console.log('ERROR')
    console.log(error);
    dispatch(setIsCouponGetting(true));
  }
}

const fetchProduct = (id: string) => axios(`${Url.Cameras}/${id}`).then((response) => response.data as Camera).catch((error: AxiosError) => Promise.reject(error.message));
const fetchSimilar = (id: string) => axios(`${Url.Cameras}/${id}/similar`).then((response) => response.data as Camera[]).catch((error: AxiosError) => Promise.reject(error.message));
const fetchReviews = (id: string) => axios(`${Url.Cameras}/${id}/reviews`).then((response) => response.data as Review[]).catch((error: AxiosError) => Promise.reject(error.message));
const fetchPromo = () => axios(Url.Promo).then((response) => response.data as Promo).catch((error: AxiosError) => Promise.reject(error.message));

const fetchCameras = (searchParams: URLSearchParams | null = null) =>
  axios(Url.Cameras, {params: searchParams})
    .then((response) => ({cameras: response.data as Camera[], headers: response.headers}))
    .catch((error: AxiosError) => Promise.reject(error.message));

export {fetchCameras, fetchProduct, fetchSimilar, fetchReviews, postReview, fetchPromo, postCoupon};
