import {Url} from '../../constants/url';
import {fetchProduct, fetchReviews, fetchSimilar, postCoupon, postOrder, postReview} from './api';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {ReviewPostData} from '../../types/review-post-data';
import mockStore from '../../test-helpers/mock-store';

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
  describe('postCoupon', () => {
    it('should post Coupon', async () => {
      mockAPI.onPost(Url.Coupon).reply(200, 13);
      const response = await postCoupon({coupon: 'c-13'});
      expect(response).toBe(13);
    });

    it('should reject Coupon', async () => {
      mockAPI.onPost(Url.Coupon).reply(400);
      await expect(postCoupon({coupon: 'c-13'})).rejects.toBe(null);
    });
  });
  describe('postOrder', () => {
    it('should post Order', async () => {
      mockAPI.onPost(Url.Order).reply(201, 13);
      const response = await postOrder({camerasIds: [1], coupon: 'c-13'});
      expect(response).toBe(13);
    });

    it('should reject Order', async () => {
      mockAPI.onPost(Url.Coupon).reply(404);
      await expect(postOrder({camerasIds: [1], coupon: 'c-13'})).rejects.toBe('Request failed with status code 404');
    });
  });
});
