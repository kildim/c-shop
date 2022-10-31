import {CAMERAS_URL, POST_REVIEW_URL} from '../../constants/url';
import {fetchProduct, fetchReviews, fetchSimilar, postReview} from './api';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {ReviewPostData} from '../../types/review-post-data';
import mockStore from '../../helpers/mock-store';

describe('API async functions tests: ', () => {
  describe('fetchProduct: ', () => {

    // it('should fetch product using proper url', async () => {
    //   const mockData = {
    //     name: 'MOCK NAME',
    //   };
    //   const id = '13';
    //   const responseMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
    //     ok: true,
    //     json: () => mockData
    //   } as unknown as Response)) as jest.Mock
    //
    //   const response = await fetchProduct(id);
    //
    //   expect(response).toEqual(mockData);
    //   expect(responseMock).toHaveBeenCalledWith(`${CAMERAS_URL}/${id}`);
    // });

    it('should', async () => {
      const id = '13';
      const mockRes = {
        ok: false,
        statusText: 'ERROR 13'
      }
      // const responseMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject(mockRes as unknown as Response)) as jest.Mock;
      // const res = await fetchProduct(id);
      // console.log(res);
      await expect(fetchProduct(id)).rejects.toMatchObject(mockRes.statusText);
      // expect(responseMock).toHaveBeenCalledWith(`${CAMERAS_URL}/${id}`);
    })
  });
  // describe('fetchSimilar: ', () => {
  //
  //   it('should fetch product using proper url', async () => {
  //     const mockData = {
  //       name: 'MOCK NAME',
  //     };
  //     const id = '13';
  //     const responseMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
  //       ok: true,
  //       json: () => mockData
  //     } as unknown as Response)) as jest.Mock
  //
  //     const response = await fetchSimilar(id);
  //
  //     expect(response).toEqual(mockData);
  //     expect(responseMock).toHaveBeenCalledWith(`${CAMERAS_URL}/${id}/similar`);
  //   });
  //
  //   it('should', async () => {
  //     const id = '13';
  //     const mockRes = {
  //       ok: false,
  //       statusText: 'ERROR 13'
  //     }
  //     const responseMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(mockRes as unknown as Response)) as jest.Mock;
  //     await expect(fetchSimilar(id)).rejects.toMatchObject(mockRes);
  //     expect(responseMock).toHaveBeenCalledWith(`${CAMERAS_URL}/${id}/similar`);
  //   })
  // });
  // describe('fetchReviews: ', () => {
  //
  //   it('should fetch product using proper url', async () => {
  //     const mockData = {
  //       name: 'MOCK NAME',
  //     };
  //     const id = '13';
  //     const responseMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
  //       ok: true,
  //       json: () => mockData
  //     } as unknown as Response)) as jest.Mock
  //
  //     const response = await fetchReviews(id);
  //
  //     expect(response).toEqual(mockData);
  //     expect(responseMock).toHaveBeenCalledWith(`${CAMERAS_URL}/${id}/reviews`);
  //   });
  //
  //   it('should return rejected promise if response status is not OK ', async () => {
  //     const id = '13';
  //     const mockRes = {
  //       ok: false,
  //       statusText: 'ERROR 13'
  //     }
  //     const responseMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(mockRes as unknown as Response)) as jest.Mock;
  //     await expect(fetchReviews(id)).rejects.toMatchObject(mockRes);
  //     expect(responseMock).toHaveBeenCalledWith(`${CAMERAS_URL}/${id}/reviews`);
  //   })
  // });

  // describe('postReview: ', () => {
  //   const mockAPI = new MockAdapter(axios);
  //
  //   const mockReview = {
  //     id: 1,
  //   };
  //
  //   it('should store error if fail', async () => {
  //     const store = mockStore({
  //       CAMERAS: {
  //         isReviewPosting: false,
  //         isNewReviewShown: false,
  //         isNewReviewSuccessShown: false,
  //         apiError: null
  //       }
  //     });
  //
  //     mockAPI.reset();
  //     mockAPI.onPost(POST_REVIEW_URL, mockReview).reply(() => {
  //       return [400, 'ERROR']
  //     });
  //
  //     await store.dispatch(async dispatch => {
  //       await dispatch(postReview(mockReview as unknown as ReviewPostData))
  //     });
  //
  //     expect(store.getActions()).toEqual([
  //         {type: 'cameras/setIsReviewPosting', payload: true},
  //         {type: 'cameras/setIsReviewPosting', payload: false},
  //         {type: 'cameras/setIsNewReviewShown', payload: false},
  //         {type: 'cameras/setApiError', payload: 'Request failed with status code 400'}
  //       ]
  //     );
  //   })
  //
  //
  //   it('should post Review', async () => {
  //     const store = mockStore({
  //       CAMERAS: {
  //         isReviewPosting: false,
  //         isNewReviewShown: false,
  //         isNewReviewSuccessShown: false,
  //       }
  //     });
  //
  //     mockAPI.reset();
  //     mockAPI.onPost(POST_REVIEW_URL).reply(200, [mockReview]);
  //
  //     await store.dispatch(async dispatch => {
  //       await dispatch(postReview(mockReview as unknown as ReviewPostData))
  //     });
  //
  //     expect(store.getActions()).toEqual([
  //         {type: 'cameras/setIsReviewPosting', payload: true},
  //         {type: 'cameras/setIsReviewPosting', payload: false},
  //         {type: 'cameras/setIsNewReviewShown', payload: false},
  //         {type: 'cameras/setIsNewReviewSuccessShown', payload: true}
  //       ]
  //     );
  //   });
  // })
});
