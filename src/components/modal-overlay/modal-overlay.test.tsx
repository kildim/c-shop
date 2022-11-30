import mockStore from '../../test-helpers/mock-store';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import Layout from '../layout/layout';
import {mockCamera} from '../../test-helpers/mock-camera';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: () => ({cameras: [mockCamera, mockCamera]}
  )
}));

describe('Component: ModalOverlay', () => {

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
    expect(screen.getByText(/Модальное окно/i)).toBeInTheDocument();
  });
});
