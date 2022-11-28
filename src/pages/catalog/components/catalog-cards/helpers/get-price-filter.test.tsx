import {render, screen} from '@testing-library/react';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import {mockCamera} from '../../../../../test-helpers/mock-camera';
import PriceFilter from '../../filter/components/price-filter/price-filter';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: () => ({cameras: [mockCamera, mockCamera]}
  )
}));

describe('Component: PriceFilter', () => {
  it('should render PriceFilter', () => {
    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <PriceFilter/>,
        },
      ],
      {
        initialEntries: ['/'],
        initialIndex: 0
      }
    );

    render (
      <RouterProvider router={testRouter}/>
  );
    expect(screen.getByText(/Цена/i)).toBeInTheDocument();
  });
});
