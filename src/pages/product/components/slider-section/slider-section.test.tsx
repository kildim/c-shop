import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import SliderSection from './slider-section';
import {mockCamera} from '../../../../helpers/mock-camera';
import mockStore from '../../../../helpers/mock-store';

const store = mockStore({
  CAMERAS: {}
});
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useAsyncValue: () => [mockCamera, mockCamera]
}));

describe('Component: ReviewCard', () => {

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HashRouter>
          <SliderSection/>
        </HashRouter>
      </Provider>,
    );

    expect(screen.getByText(/Похожие товары/i)).toBeInTheDocument();
  });
});
