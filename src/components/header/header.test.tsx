import {render, screen} from '@testing-library/react';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import Header from './header';
import {mockCamera} from '../../test-helpers/mock-camera';
import mockStore from '../../test-helpers/mock-store';
import {Provider} from 'react-redux';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: () => ({cameras: [mockCamera, mockCamera]}
  )
}));

describe('Component: Header', () => {

  it('should render correctly', () => {
    const store = mockStore({
      CAMERAS: {cart: {1: 1}}
    });
    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <Header/>,
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

    expect(screen.getByPlaceholderText(/Поиск по сайту/i)).toBeInTheDocument();
  });
});
