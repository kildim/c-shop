import {render, screen} from '@testing-library/react';
import Banner from './banner';
import {Provider} from 'react-redux';
import mockStore from '../../../../helpers/mock-store';
import {Promo} from '../../../../types/promo';
import {HashRouter} from 'react-router-dom';

describe('Component: Basket', () => {

  it('should render correctly', () => {
    const store = mockStore({
      CAMERAS: {
        promo: {} as Promo,
      }
    });
    render(
      <Provider store={store}>
        <HashRouter>
          <Banner/>
        </HashRouter>
      </Provider>
    );

    expect(screen.getByText(/Новинка!/i)).toBeInTheDocument();
  });
});
