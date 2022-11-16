import {render, screen} from '@testing-library/react';
import {mockCamera} from '../../../../../../test-helpers/mock-camera';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import PriceFilter from './price-filter';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: () => ({cameras: [mockCamera, mockCamera]}
  )
}));

describe('Component: LevelFilter', () => {
  it('should render LevelFilter', () => {
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
