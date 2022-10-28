import {CAMERAS_URL} from '../../constants/url';
import {fetchProduct} from './api';

describe('fetchProduct: ', () => {

  it('should fetch product using proper url', async () => {
    const mockCamera = {
      name: 'MOCK NAME',
    };
    const id = '13';

    const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => mockCamera
    } as unknown as Response)) as jest.Mock
    const response = await fetchProduct(id);
    expect(response).toEqual(mockCamera);
    expect(fetchMock).toHaveBeenCalledWith(`${CAMERAS_URL}/${id}`);
  })
})
