import {render, screen} from '@testing-library/react';
import {HashRouter, useLoaderData} from 'react-router-dom';
import {Provider} from 'react-redux';
import Product from './product';
import mockStore from '../../helpers/mock-store';
import {mockCamera} from '../../helpers/mock-camera';
import {mockReview} from '../../helpers/mock-review';
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: () => ({product: mockCamera, similar:  [mockCamera, mockCamera], reviews: [mockReview, mockReview], id: 1})
}));
const store = mockStore({
  CAMERAS: {}
});

describe('Component: Product', () => {

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HashRouter>
          <Product/>
        </HashRouter>
      </Provider>,
    );

    expect(screen.getByText(/Отзывы/i)).toBeInTheDocument();
  });
});
