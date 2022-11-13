import {ThunkAction} from '@reduxjs/toolkit';
import {RootState} from '../../index';
import {RootReducerActions} from '../../store/reducers/root-reducer';
import {
  // loadCameras,
  // loadPromo,
  setApiError,
  // setIsCamerasLoading,
  setIsNewReviewShown,
  setIsNewReviewSuccessShown,
  setIsReviewPosting,
  // setPagesCount
} from '../../store/reducers/cameras/cameras-actions';
import {Url} from '../../constants/url';

// import {calculatePages} from '../../helpers/calculate-pages';
import {Promo} from '../../types/promo';
import {Camera} from '../../types/camera';
import {ReviewPostData} from '../../types/review-post-data';
import axios, {AxiosError} from 'axios';
import {Review} from '../../types/review';

// const fetchInitData = (): ThunkAction<Promise<void>, RootState, unknown, RootReducerActions> => async (dispatch, _getState) => {
//   // dispatch(setIsCamerasLoading(true));
//
//   try {
//     const parsedResponses = await axios.all([Url.Cameras, Url.Promo].map((url) => axios.get(url, {validateStatus: (status) => status < 300})));
//     const cameras = parsedResponses[0].data as Camera [];
//     const promo = parsedResponses[1].data as Promo;
//     dispatch(loadCameras(cameras));
//     // dispatch(setPagesCount(calculatePages(cameras.length)));
//     dispatch(loadPromo(promo));
//     // dispatch(setIsCamerasLoading(false));
//   } catch (error) {
//     const {message} = error as AxiosError;
//     // dispatch(setIsCamerasLoading(false));
//     dispatch(setApiError(message));
//   }
// };

// const fetchCameras = (searchParams: URLSearchParams | null = null): ThunkAction<Promise<void>, RootState, unknown, RootReducerActions> => async (dispatch, _getState) => {
//   dispatch(setIsCamerasLoading(true));
//   try {
//     const parsedResponses = await axios(Url.Cameras, {params: searchParams});
//     const cameras = parsedResponses.data as Camera[];
//     dispatch(loadCameras(cameras));
//     dispatch(setPagesCount(calculatePages(cameras.length)));
//     dispatch(setIsCamerasLoading(false));
//   } catch (error) {
//     const {message} = error as AxiosError;
//     dispatch(setIsCamerasLoading(false));
//     dispatch(setApiError(message));
//   }
// };

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

const fetchProduct = (id: string) => axios(`${Url.Cameras}/${id}`).then((response) => response.data as Camera).catch((error: AxiosError) => Promise.reject(error.message));
const fetchSimilar = (id: string) => axios(`${Url.Cameras}/${id}/similar`).then((response) => response.data as Camera[]).catch((error: AxiosError) => Promise.reject(error.message));
const fetchReviews = (id: string) => axios(`${Url.Cameras}/${id}/reviews`).then((response) => response.data as Review[]).catch((error: AxiosError) => Promise.reject(error.message));
const fetchPromo = () => axios(Url.Promo).then((response) => response.data as Promo).catch((error: AxiosError) => Promise.reject(error.message));

const fetchCameras = (searchParams: URLSearchParams | null = null) =>
  axios(Url.Cameras, {params: searchParams})
    .then((response) => response.data as Camera[])
    .catch((error: AxiosError) => Promise.reject(error.message));

export {fetchCameras, fetchProduct, fetchSimilar, fetchReviews, postReview, fetchPromo};
