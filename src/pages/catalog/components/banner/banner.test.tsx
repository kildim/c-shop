import {render, screen} from '@testing-library/react';
import Banner from './banner';
import {Provider} from 'react-redux';
import mockStore from '../../../../test-helpers/mock-store';
import {Promo} from '../../../../types/promo';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import {mockPromo} from '../../../../test-helpers/mock-promo';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: () => ({promo: mockPromo})
}));

describe('Component: Basket', () => {

  it('should render correctly', () => {
    const store = mockStore({
      CAMERAS: {
        promo: {} as Promo,
      }
    });

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
      <Provider store={store}>
        <RouterProvider router={testRouter}/>
      </Provider>
    );

    expect(screen.getByText(/Новинка!/i)).toBeInTheDocument();
  });
});
