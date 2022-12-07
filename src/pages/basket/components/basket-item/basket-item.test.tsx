import {render, screen} from '@testing-library/react';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import mockStore from '../../../../test-helpers/mock-store';
import {Provider} from 'react-redux';
import BasketItem from './basket-item';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: () => ({cameras: [{id: 1, name: 'fake name'}, {id: 2}]}
  )
}));

describe('Component: ModalSuccess:', () => {
  it('should render correct', () => {
    const store = mockStore({
      CAMERAS: {cart: {1: 1}}
    });
    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <BasketItem id={1}/>,
        },
      ],
      {
        initialEntries: ['/'],
        initialIndex: 0
      }
    );
    render(
      <Provider store={store}>
        <RouterProvider router={testRouter} />
      </Provider>
    );
    expect(screen.getByText(/fake name/i)).toBeInTheDocument();
  });
});
