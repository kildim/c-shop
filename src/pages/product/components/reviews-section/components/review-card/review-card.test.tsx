import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import ReviewCard from './review-card';
import mockStore from '../../../../../../helpers/mock-store';
import {mockReview} from '../../../../../../helpers/mock-review';


const store = mockStore({
  CAMERAS: {}
});
describe('Component: ReviewCard', () => {

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HashRouter>
          <ReviewCard review={mockReview}/>
        </HashRouter>
      </Provider>,
    );

    const fakeUserName = RegExp(`${mockReview.userName}`, 'i')
    expect(screen.getByText(fakeUserName)).toBeInTheDocument();
  });
});
