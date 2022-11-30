import {render, screen} from '@testing-library/react';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';
import Catalog from './catalog';
import mockStore from '../../test-helpers/mock-store';
import {mockCamera} from '../../test-helpers/mock-camera';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: () => ({cameras: [mockCamera, mockCamera]}
  )
}));
const store = mockStore({
  CAMERAS: {
    buyPopupShown: 1,
  }
});
describe('Component: Card', () => {

  it('should render correctly', () => {
    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <Catalog/>,
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
      </Provider>,
    );

    expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
  });
});
