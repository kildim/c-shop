import ApiError from './api-error';
import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import mockStore from '../../helpers/mock-store';

describe('Component: ApiError', () => {

  it('should render correctly', () => {
    const store = mockStore({
      CAMERAS: {
        apiError: 'MOCK ERROR',
      }
    });

    render(
      <Provider store={store}>
        <HashRouter>
          <ApiError/>
        </HashRouter>
      </Provider>,
    );

    expect(screen.getByText(/API ERROR/i)).toBeInTheDocument();
  });
});
