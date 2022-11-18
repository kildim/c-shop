import {renderHook} from '@testing-library/react';
import useAscendingPrices from './use-ascending-prices';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: () => ({cameras: [{price: 1}, {price: 5}, {price: 4}, {price: 2}]}
  )
}));

describe('Test useAscendingPrices hook', () => {
  it('should return array of camera prices by ascending order', () => {
    const properResult = {prices: [1, 2, 4, 5]};
    const {result} = renderHook(() => useAscendingPrices());
    expect(result.current).toEqual(properResult);
  });
});
