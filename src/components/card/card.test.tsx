import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Card from './card';
import mockStore from '../../test-helpers/mock-store';
import {mockCamera} from '../../test-helpers/mock-camera';

describe('Component: Card', () => {

  it('should render correctly', () => {
    const store = mockStore({
      CAMERAS: {cart: {1: 1}}
    });

    render(
      <Provider store={store}>
        <HashRouter>
          <Card camera={mockCamera} />
        </HashRouter>
      </Provider>,
    );

    const textToFind = RegExp(`${mockCamera.name}`, 'i');
    expect(screen.getByText(textToFind)).toBeInTheDocument();
  });
});
