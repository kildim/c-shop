import mockStore from '../../test-helpers/mock-store';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import Layout from '../layout/layout';

describe('Component: Layout', () => {

  it('should render correctly', () => {
    const store = mockStore({
      CAMERAS: {}
    });

    render(
      <Provider store={store}>
        <HashRouter>
          <Layout/>
        </HashRouter>
      </Provider>
    )
    expect(screen.getByText(/Модальное окно/i)).toBeInTheDocument();
  })
})
