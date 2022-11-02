import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Catalog from './catalog';
import mockStore from '../../helpers/mock-store';

const store = mockStore({
  CAMERAS: {
    cameras: [{id: 1}],
    buyPopupShown: 1,
  }
});
describe('Component: Card', () => {

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HashRouter>
          <Catalog/>
        </HashRouter>
      </Provider>,
    );

    expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
  });
});
