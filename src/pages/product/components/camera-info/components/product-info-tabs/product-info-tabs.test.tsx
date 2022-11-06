import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import ProductInfoTabs from './product-info-tabs';
import {mockCamera} from '../../../../../../test-helpers/mock-camera';
import mockStore from '../../../../../../test-helpers/mock-store';

const store = mockStore({
  CAMERAS: {}
});
describe('Component: Card', () => {

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HashRouter>
          <ProductInfoTabs product={mockCamera}/>
        </HashRouter>
      </Provider>,
    );

    expect(screen.getByText(/Описание/i)).toBeInTheDocument();
  });
});
