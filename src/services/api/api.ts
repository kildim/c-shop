import {ThunkAction} from '@reduxjs/toolkit';
import {RootState} from '../../index';
import {checkResponse} from '../../helpers/check-response';
import {RootReducerActions} from '../../store/reducers/root-reducer';
import {
  loadCameras, loadPromo,
  setIsCamerasLoading,
  setPagesCount
} from '../../store/reducers/cameras/cameras-actions';
import {CAMERAS_URL, PROMO_URL} from '../../constants/url';

import {calculatePages} from '../../helpers/calculate-pages';
import {Promo} from '../../types/promo';
import {Camera} from '../../types/camera';

const fetchInitData = (): ThunkAction<void, RootState, unknown, RootReducerActions> => (dispatch, _getState) => {
  dispatch(setIsCamerasLoading(true));
  Promise.all([CAMERAS_URL, PROMO_URL].map((url) => fetch(url)))
    .then((responses: Response[]) =>
      Promise.all<Camera[] | Promo>(responses.map((response: Response) => checkResponse(response))))
    .then((parsedResponses) => {
      const cameras = parsedResponses[0] as Camera [];
      const promo = parsedResponses[1] as Promo;
      dispatch(loadCameras(cameras));
      dispatch(setPagesCount(calculatePages(cameras.length)));
      dispatch(loadPromo(promo));
      dispatch(setIsCamerasLoading(false));
    })
    .catch((error) => {
      dispatch(setIsCamerasLoading(false));
    });
};

const fetchProduct = (id: string) => fetch(`${CAMERAS_URL}/${id}`).then(checkResponse);
const fetchSimilar = (id: string) => fetch(`${CAMERAS_URL}/${id}/similar`).then(checkResponse);

export {fetchInitData, fetchProduct, fetchSimilar};
