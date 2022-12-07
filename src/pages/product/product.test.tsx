import {render, screen} from '@testing-library/react';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';
import Product from './product';
import mockStore from '../../test-helpers/mock-store';
import {mockCamera} from '../../test-helpers/mock-camera';
import {mockReview} from '../../test-helpers/mock-review';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: () => ({
    product: mockCamera,
    similar: [mockCamera, mockCamera],
    reviews: [mockReview, mockReview],
    id: 1
  })
}));
const store = mockStore({
  CAMERAS: {cart: {1: 1}}
});

describe('Component: Product', () => {

  it('should render correctly', () => {

    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <Product/>

        }
      ],
      {
        initialEntries: ['/'],
        initialIndex: 0,
      });

    render(
      <Provider store={store}>
        <RouterProvider router={testRouter}/>
      </Provider>,
    );
    expect(screen.getByText(/Отзывы/i)).toBeInTheDocument();
  });
});
