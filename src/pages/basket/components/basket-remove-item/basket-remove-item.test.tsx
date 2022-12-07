import {render, screen} from '@testing-library/react';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import BasketRemoveItem from './basket-remove-item';
import mockStore from '../../../../test-helpers/mock-store';
import {Provider} from 'react-redux';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: () => ({cameras: [{id: 1}, {id: 2}]}
  )
}));

describe('Component: ModalSuccess:', () => {
  it('should render correct', () => {
    const store = mockStore({
      CAMERAS: {removeCartItemDialogShown: 1}
    });
    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <BasketRemoveItem/>,
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
    expect(screen.getByText(/Удалить этот товар?/i)).toBeInTheDocument();
  });
});
