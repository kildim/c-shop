import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import SliderSection from './slider-section';
import {mockCamera} from '../../../../test-helpers/mock-camera';
import mockStore from '../../../../test-helpers/mock-store';

const store = mockStore({
  CAMERAS: {}
});
jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
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
