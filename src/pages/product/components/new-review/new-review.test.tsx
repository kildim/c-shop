import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import mockStore from '../../../../test-helpers/mock-store';
import NewReview from './new-review';

const store = mockStore({
  CAMERAS: {}
});
describe('Component: CameraInfo', () => {

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HashRouter>
          <NewReview id={1}/>
        </HashRouter>
      </Provider>,
    );

    expect(screen.getByText(/Отправить отзыв/i)).toBeInTheDocument();
  });
});
