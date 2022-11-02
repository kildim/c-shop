import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import mockStore from '../../../../helpers/mock-store';
import NewReviewSuccess from './new-review-success';

const store = mockStore({
  CAMERAS: {}
});
describe('Component: NewReviewSuccess', () => {

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HashRouter>
          <NewReviewSuccess/>
        </HashRouter>
      </Provider>,
    );

    expect(screen.getByText(/Спасибо за отзыв/i)).toBeInTheDocument();
  });
});
