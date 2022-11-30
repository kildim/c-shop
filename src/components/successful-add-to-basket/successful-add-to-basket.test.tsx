import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import mockStore from '../../test-helpers/mock-store';
import {HashRouter} from 'react-router-dom';
import SuccessfulAddToBasket from './successful-add-to-basket';

describe('Component: BasketAdd', () => {

  it('should render correctly', () => {
    const store = mockStore({
      CAMERAS: {}
    });

    render(
      <Provider store={store}>
        <HashRouter>
          <SuccessfulAddToBasket onClosePopupClick={() => undefined}/>
        </HashRouter>
      </Provider>
    );

    expect(screen.getByText(/Товар успешно добавлен/i)).toBeInTheDocument();
  });
});
