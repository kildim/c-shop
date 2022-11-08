import {renderHook} from '@testing-library/react';
import usePage from './use-page';


jest.mock('react-router-dom', () => ({
  useParams: () => ({id: 'page_13'}),
}));

describe('Test UsePage hook', () => {
  it ('should return number of pages', () => {

    const {result} = renderHook(() => usePage());
    expect(result.current).toEqual(13);

  });
});
