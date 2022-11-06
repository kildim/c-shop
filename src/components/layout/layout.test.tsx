import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import Layout from './layout';
import mockStore from '../../helpers/mock-store';
import {Provider} from 'react-redux';

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
    expect(screen.getByPlaceholderText(/Поиск по сайту/i)).toBeInTheDocument();
  })
})
