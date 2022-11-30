import {render, screen} from '@testing-library/react';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';
import mockStore from '../../../../test-helpers/mock-store';
import CatalogCards from './catalog-cards';
import {mockCamera} from '../../../../test-helpers/mock-camera';
jest.mock('../../../../hooks/use-page', () => () => 1);
jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: () => ({cameras: [{...mockCamera, id: 1}, {...mockCamera, id: 2}]}
  )
}));

describe('Component: Card', () => {

  it('should render correctly', () => {
    const store = mockStore({
      CAMERAS: {
      }
    });

    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <CatalogCards/>,
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


    const textToFind = RegExp(`${mockCamera.name}`, 'i');
    expect(screen.getAllByText(textToFind)).toHaveLength(2);
  });
});
