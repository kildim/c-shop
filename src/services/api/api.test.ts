import {Url} from '../../constants/url';
import {fetchCameras, fetchInitData, fetchProduct, fetchReviews, fetchSimilar, postReview} from './api';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {ReviewPostData} from '../../types/review-post-data';
import mockStore from '../../test-helpers/mock-store';
import {calculatePages} from '../../helpers/calculate-pages';

describe('API async functions tests:', () => {
  const mockAPI = new MockAdapter(axios);

  beforeEach(() => mockAPI.reset());

  describe('fetchProduct:', () => {

    it('should fetch product using proper url', async () => {
      const mockData = {
        name: 'MOCK NAME',
      };
      const id = '13';
      mockAPI.onGet(`${Url.Cameras}/${id}`).reply(200, mockData);

      const response = await fetchProduct(id);

      expect(response).toEqual(mockData);
      expect(mockAPI.history.get[0].url).toBe(`${Url.Cameras}/${id}`);
    });

    it('should catch errors', async () => {
      const id = '13';
      mockAPI.onGet(`${Url.Cameras}/${id}`).reply(400);
      await expect(fetchProduct(id)).rejects.toBe('Request failed with status code 400');
    });
  });

  describe('fetchSimilar:', () => {

    it('should fetch product similar using proper url', async () => {
      const mockData = {
        name: 'MOCK NAME',
      };
      const id = '13';
      mockAPI.onGet(`${Url.Cameras}/${id}/similar`).reply(200, mockData);

      const response = await fetchSimilar(id);

      expect(response).toEqual(mockData);
      expect(mockAPI.history.get[0].url).toBe(`${Url.Cameras}/${id}/similar`);
    });

    it('should catch errors', async () => {
      const id = '13';
      mockAPI.onGet(`${Url.Cameras}/${id}/similar`).reply(400);
      await expect(fetchSimilar(id)).rejects.toBe('Request failed with status code 400');
    });
  });
  describe('fetchReviews:', () => {

    it('should fetch product reviews using proper url', async () => {
      const mockData = {
        name: 'MOCK NAME',
      };
      const id = '13';
      mockAPI.onGet(`${Url.Cameras}/${id}/reviews`).reply(200, mockData);

      const response = await fetchReviews(id);

      expect(response).toEqual(mockData);
      expect(mockAPI.history.get[0].url).toBe(`${Url.Cameras}/${id}/reviews`);
    });

    it('should catch errors', async () => {
      const id = '13';
      mockAPI.onGet(`${Url.Cameras}/${id}/reviews`).reply(400);
      await expect(fetchReviews(id)).rejects.toBe('Request failed with status code 400');
    });
  });

  describe('postReview:', () => {
    const mockReview = {
      id: 1,
    };

    it('should store error if fail', async () => {
      const store = mockStore({
        CAMERAS: {
          isReviewPosting: false,
          isNewReviewShown: false,
          isNewReviewSuccessShown: false,
          apiError: null
        }
      });

      mockAPI.onPost(Url.PostReview, mockReview).reply(() => [400, 'ERROR']);

      return store.dispatch(postReview(mockReview as unknown as ReviewPostData)).then(() => {
        expect(store.getActions()).toEqual(
          [
            {
              payload: true,
              type: 'cameras/setIsReviewPosting'
            },
            {
              payload: false,
              type: 'cameras/setIsReviewPosting'
            },
            {
              payload: false,
              type: 'cameras/setIsNewReviewShown'
            },
            {
              payload: 'Request failed with status code 400',
              type: 'cameras/setApiError'
            }
          ]
        );
      });
    });


    it('should post Review', async () => {
      const store = mockStore({
        CAMERAS: {
          isReviewPosting: false,
          isNewReviewShown: false,
          isNewReviewSuccessShown: false,
        }
      });

      mockAPI.onPost(Url.PostReview).reply(200, [mockReview]);

      await store.dispatch(async (dispatch) => {
        await dispatch(postReview(mockReview as unknown as ReviewPostData));
      });

      expect(store.getActions()).toEqual(
        [
          {type: 'cameras/setIsReviewPosting', payload: true},
          {type: 'cameras/setIsReviewPosting', payload: false},
          {type: 'cameras/setIsNewReviewShown', payload: false},
          {type: 'cameras/setIsNewReviewSuccessShown', payload: true}
        ]
      );
    });
  });

  describe('fetchCameras:', () => {
    it('should return Cameras.', async () => {
      const store = mockStore({
        CAMERAS: {
          isReviewPosting: false,
          isNewReviewShown: false,
          isNewReviewSuccessShown: false,
          isCameraLoading: false,
          cameras: [],
          promo: null,
          pagesCount: 0,
          apiError: null
        }
      });
      const mockCameras = Array(10).fill(null).map((_el, index) => ({id: index}));
      const mockPagesCount = calculatePages(mockCameras.length);

      mockAPI.onGet(`${Url.Cameras}`).reply(200, mockCameras);
      return store.dispatch(fetchCameras()).then(() => {
        expect(store.getActions()).toEqual(
          [
            {type: 'cameras/setIsCamerasLoading', payload: true},
            {
              type: 'cameras/loadCameras',
              payload: mockCameras
            },
            {type: 'cameras/setPagesCount', payload: mockPagesCount},
            {type: 'cameras/setIsCamerasLoading', payload: false}
          ]
        );
      });
    })
  })

  describe('fetchInitData:', () => {
    it('should fetch Cameras and Promo.', async () => {
      const store = mockStore({
        CAMERAS: {
          isReviewPosting: false,
          isNewReviewShown: false,
          isNewReviewSuccessShown: false,
          isCameraLoading: false,
          cameras: [],
          promo: null,
          pagesCount: 0,
          apiError: null
        }
      });

      const mockCameras = Array(10).fill(null).map((_el, index) => ({id: index}));
      const mockPromo = {id: 13};
      const mockPagesCount = calculatePages(mockCameras.length);

      mockAPI.onGet(`${Url.Cameras}`).reply(200, mockCameras).onGet(`${Url.Promo}`).reply(200, mockPromo);
      return store.dispatch(fetchInitData()).then(() => {
        expect(store.getActions()).toEqual(
          [
            {type: 'cameras/setIsCamerasLoading', payload: true},
            {
              type: 'cameras/loadCameras',
              payload: mockCameras
            },
            {type: 'cameras/setPagesCount', payload: mockPagesCount},
            {type: 'cameras/loadPromo', payload: mockPromo},
            {type: 'cameras/setIsCamerasLoading', payload: false}
          ]
        );
      });

    });
    it('should store error if fail promo request', async () => {
      const store = mockStore({
        CAMERAS: {
          isReviewPosting: false,
          isNewReviewShown: false,
          isNewReviewSuccessShown: false,
          isCameraLoading: false,
          cameras: [],
          promo: null,
          pagesCount: 0,
          apiError: null
        }
      });
      const mockCameras = Array(10).fill(null).map((_el, index) => ({id: index}));
      const mockPromo = {id: 13};

      mockAPI.onGet(`${Url.Cameras}`).reply(200, mockCameras).onGet(`${Url.Promo}`).reply(400, mockPromo);
      await store.dispatch(fetchInitData());

      expect(store.getActions()).toEqual(
        [
          {type: 'cameras/setIsCamerasLoading', payload: true},
          {type: 'cameras/setIsCamerasLoading', payload: false},
          {
            type: 'cameras/setApiError',
            payload: 'Request failed with status code 400'
          }
        ]
      );
    });
    it('should store error if fail cameras request', async () => {
      const store = mockStore({
        CAMERAS: {
          isReviewPosting: false,
          isNewReviewShown: false,
          isNewReviewSuccessShown: false,
          isCameraLoading: false,
          cameras: [],
          promo: null,
          pagesCount: 0,
          apiError: null
        }
      });
      const mockCameras = Array(10).fill(null).map((_el, index) => ({id: index}));
      const mockPromo = {id: 13};

      mockAPI.onGet(`${Url.Cameras}`).reply(400, mockCameras).onGet(`${Url.Promo}`).reply(200, mockPromo);
      await store.dispatch(fetchInitData());

      expect(store.getActions()).toEqual(
        [
          {type: 'cameras/setIsCamerasLoading', payload: true},
          {type: 'cameras/setIsCamerasLoading', payload: false},
          {
            type: 'cameras/setApiError',
            payload: 'Request failed with status code 400'
          }
        ]
      );
    });

  });
});
