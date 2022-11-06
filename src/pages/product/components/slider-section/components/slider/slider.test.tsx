import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import mockStore from '../../../../../../helpers/mock-store';
import Slider from './slider';
import {mockCamera} from '../../../../../../helpers/mock-camera';

const store = mockStore({
  CAMERAS: {}
});

const mockCameras = [mockCamera, mockCamera];

describe('Component: ReviewCard', () => {

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HashRouter>
          <Slider products={mockCameras}/>
        </HashRouter>
      </Provider>,
    );

    expect(screen.queryAllByText(mockCamera.name)).toHaveLength(2);
  });
});