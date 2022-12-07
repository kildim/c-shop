import {render, screen} from '@testing-library/react';
import Basket from './basket';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import {mockCamera} from '../../test-helpers/mock-camera';
import mockStore from '../../test-helpers/mock-store';
import {Provider} from 'react-redux';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: () => ({
    cameras: [{...mockCamera, id: 1}, mockCamera],
  })
}));

describe('Component: Basket', () => {

  it('should render correctly', () => {
    const store = mockStore({
      CAMERAS: {cart: {1: 1}, removeCartItemDialogShown: null}
    });

    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <Basket/>,
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

    expect(screen.getAllByText(/Корзина/i)).toHaveLength(2);
  });
});
