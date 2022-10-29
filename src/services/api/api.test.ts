import {CAMERAS_URL} from '../../constants/url';
import {fetchProduct, fetchReviews, fetchSimilar} from './api';

describe('API async functions tests: ', () => {
  describe('fetchProduct: ', () => {

    it('should fetch product using proper url', async () => {
      const mockData = {
        name: 'MOCK NAME',
      };
      const id = '13';
      const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => mockData
      } as unknown as Response)) as jest.Mock

      const response = await fetchProduct(id);

      expect(response).toEqual(mockData);
      expect(fetchMock).toHaveBeenCalledWith(`${CAMERAS_URL}/${id}`);
    });

    it('should', async () => {
      const id = '13';
      const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
        ok: false,
        statusText: 'ERROR 13'
      } as unknown as Response)) as jest.Mock;
      await expect(fetchProduct(id)).rejects.toMatch('ERROR 13');
      expect(fetchMock).toHaveBeenCalledWith(`${CAMERAS_URL}/${id}`);
    })
  });
  describe('fetchSimilar: ', () => {

    it('should fetch product using proper url', async () => {
      const mockData = {
        name: 'MOCK NAME',
      };
      const id = '13';
      const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => mockData
      } as unknown as Response)) as jest.Mock

      const response = await fetchSimilar(id);

      expect(response).toEqual(mockData);
      expect(fetchMock).toHaveBeenCalledWith(`${CAMERAS_URL}/${id}/similar`);
    });

    it('should', async () => {
      const id = '13';
      const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
        ok: false,
        statusText: 'ERROR 13'
      } as unknown as Response)) as jest.Mock;
      await expect(fetchSimilar(id)).rejects.toMatch('ERROR 13');
      expect(fetchMock).toHaveBeenCalledWith(`${CAMERAS_URL}/${id}/similar`);
    })
  });
  describe('fetchReviews: ', () => {

    it('should fetch product using proper url', async () => {
      const mockData = {
        name: 'MOCK NAME',
      };
      const id = '13';
      const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => mockData
      } as unknown as Response)) as jest.Mock

      const response = await fetchReviews(id);

      expect(response).toEqual(mockData);
      expect(fetchMock).toHaveBeenCalledWith(`${CAMERAS_URL}/${id}/reviews`);
    });

    it('should', async () => {
      const id = '13';
      const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
        ok: false,
        statusText: 'ERROR 13'
      } as unknown as Response)) as jest.Mock;
      await expect(fetchReviews(id)).rejects.toMatch('ERROR 13');
      expect(fetchMock).toHaveBeenCalledWith(`${CAMERAS_URL}/${id}/reviews`);
    })
  });

});
