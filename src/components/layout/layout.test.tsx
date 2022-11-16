import {render, screen} from '@testing-library/react';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import Layout from './layout';
import mockStore from '../../test-helpers/mock-store';
import {Provider} from 'react-redux';
import {mockCamera} from '../../test-helpers/mock-camera';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: () => ({cameras: [mockCamera, mockCamera]}
  )
}));

describe('Component: Layout', () => {

  it('should render correctly', () => {
    const store = mockStore({
      CAMERAS: {}
    });

    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <Layout/>,
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
