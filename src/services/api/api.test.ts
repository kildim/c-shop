import {CAMERAS_URL, PROMO_URL} from '../../constants/url';
import {fetchProduct, fetchReviews, fetchSimilar} from './api';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from '@reduxjs/toolkit';
import {RootState} from '../../index';
import {ThunkAppDispatch} from '../../types/thunk-app-dispatch';
import axios, {AxiosResponse} from 'axios';
import {Camera} from '../../types/camera';
import {Promo} from '../../types/promo';
import {checkResponse} from '../../helpers/check-response';
import {setApiError, setIsCamerasLoading} from '../../store/reducers/cameras/cameras-actions';
import {log} from 'util';

describe('API async functions tests: ', () => {
  describe('fetchProduct: ', () => {

    it('should fetch product using proper url', async () => {
      const mockData = {
        name: 'MOCK NAME',
      };
      const id = '13';
      const responseMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => mockData
      } as unknown as Response)) as jest.Mock

      const response = await fetchProduct(id);

      expect(response).toEqual(mockData);
      expect(responseMock).toHaveBeenCalledWith(`${CAMERAS_URL}/${id}`);
    });

    it('should', async () => {
      const id = '13';
      const mockRes = {
        ok: false,
        statusText: 'ERROR 13'
      }
      const responseMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(mockRes as unknown as Response)) as jest.Mock;
      await expect(fetchProduct(id)).rejects.toMatchObject(mockRes);
      expect(responseMock).toHaveBeenCalledWith(`${CAMERAS_URL}/${id}`);
    })
  });
  describe('fetchSimilar: ', () => {

    it('should fetch product using proper url', async () => {
      const mockData = {
        name: 'MOCK NAME',
      };
      const id = '13';
      const responseMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => mockData
      } as unknown as Response)) as jest.Mock

      const response = await fetchSimilar(id);

      expect(response).toEqual(mockData);
      expect(responseMock).toHaveBeenCalledWith(`${CAMERAS_URL}/${id}/similar`);
    });

    it('should', async () => {
      const id = '13';
      const mockRes = {
        ok: false,
        statusText: 'ERROR 13'
      }
      const responseMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(mockRes as unknown as Response)) as jest.Mock;
      await expect(fetchSimilar(id)).rejects.toMatchObject(mockRes);
      expect(responseMock).toHaveBeenCalledWith(`${CAMERAS_URL}/${id}/similar`);
    })
  });
  describe('fetchReviews: ', () => {

    it('should fetch product using proper url', async () => {
      const mockData = {
        name: 'MOCK NAME',
      };
      const id = '13';
      const responseMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => mockData
      } as unknown as Response)) as jest.Mock

      const response = await fetchReviews(id);

      expect(response).toEqual(mockData);
      expect(responseMock).toHaveBeenCalledWith(`${CAMERAS_URL}/${id}/reviews`);
    });

    it('should return rejected promise if response status is not OK ', async () => {
      const id = '13';
      const mockRes = {
        ok: false,
        statusText: 'ERROR 13'
      }
      const responseMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(mockRes as unknown as Response)) as jest.Mock;
      await expect(fetchReviews(id)).rejects.toMatchObject(mockRes);
      expect(responseMock).toHaveBeenCalledWith(`${CAMERAS_URL}/${id}/reviews`);
    })
  });

  describe('fetchInitData: ', () => {
    const mockStore = configureMockStore<RootState,
      Action,
      ThunkAppDispatch>();

    it('should', async () => {
      // const responseMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      //   ok: true,
      //   json: () => ({name: 'VANYA'})
      // } as unknown as Response)) as jest.Mock
      // jest.mock('node-fetch', () => require('fetch-mock-jest').sandbox());
      // const fetchMock = require('node-fetch');
      const store = mockStore();
      await axios.all([CAMERAS_URL, PROMO_URL].map((url) => axios.get(url, {validateStatus: (status) => status < 300})))
        .then((data) => {
          console.log(data[1].data)})
        .catch((error) => {
          // store.dispatch(setIsCamerasLoading(false));
          store.dispatch(setApiError(error as Response));
        });

      console.log(store.getActions());

//       fetchMock.get(`${CAMERAS_URL}/1`, {name: 'NAME'})

      // fetch.mockResponse(JSON.stringify({ access_token: '12345' }))

      // const response = await axios(PROMO_URL);
      // console.log(response);
    })
  })
});
