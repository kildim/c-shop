import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import ReviewsSection from './reviews-section';
import {mockReview} from '../../../../helpers/mock-review';
import mockStore from '../../../../helpers/mock-store';
import {mockCamera} from '../../../../helpers/mock-camera';
import {CamerasReducer} from '../../../../types/cameras-reducer';
import {RootReducerType} from '../../../../store/reducers/root-reducer';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useAsyncValue: () => [mockReview]
}));

const store = mockStore({
  CAMERAS: {
    cameras: [mockCamera]
  }
});
describe('Component: ReviewsSection', () => {

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HashRouter>
          <ReviewsSection  id={(store.getState() as RootReducerType).CAMERAS.cameras[0].id as number}/>
        </HashRouter>
      </Provider>,
    );

    expect(screen.getByText(/Показать больше отзывов/i)).toBeInTheDocument();
  });
});
