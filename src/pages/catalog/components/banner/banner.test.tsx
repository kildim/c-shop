import {render, screen} from '@testing-library/react';
import Banner from './banner';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import {mockPromo} from '../../../../test-helpers/mock-promo';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: () => ({promo: mockPromo})
}));

describe('Component: Basket', () => {

  it('should render correctly', () => {
    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <Banner/>,
        },
      ],
      {
        initialEntries: ['/'],
        initialIndex: 0
      }
    );

    render(
      <RouterProvider router={testRouter}/>
    );

    expect(screen.getByText(/Новинка!/i)).toBeInTheDocument();
  });
});
