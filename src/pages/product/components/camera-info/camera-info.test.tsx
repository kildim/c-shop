import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import CameraInfo from './camera-info';
import mockStore from '../../../../test-helpers/mock-store';
import {mockCamera} from '../../../../test-helpers/mock-camera';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useAsyncValue: () => mockCamera
}));

const store = mockStore({
  CAMERAS: {}
});
describe('Component: CameraInfo', () => {

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HashRouter>
          <CameraInfo/>
        </HashRouter>
      </Provider>,
    );

    expect(screen.getByText(/Добавить в корзину/i)).toBeInTheDocument();
  });
});
