import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import mockStore from '../../test-helpers/mock-store';
import {HashRouter} from 'react-router-dom';
import BasketAdd from './basket-add';
import {mockCamera} from '../../test-helpers/mock-camera';

describe('Component: BasketAdd', () => {

  it('should render correctly', () => {
    const store = mockStore({
      CAMERAS: {}
    });

    render(
      <Provider store={store}>
        <HashRouter>
          <BasketAdd card={mockCamera} onClosePopupClick={() => undefined}/>
        </HashRouter>
      </Provider>
    );

    expect(screen.getByText(/Добавить товар в корзину/i)).toBeInTheDocument();
  });
});
