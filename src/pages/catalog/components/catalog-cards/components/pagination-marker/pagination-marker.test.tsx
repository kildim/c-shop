import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import mockStore from '../../../../../../test-helpers/mock-store';
import PaginationMarker from './pagination-marker';

const FAKE_PAGE_NUMBER = 13;
jest.mock('../../../../hooks/use-page', () => () => FAKE_PAGE_NUMBER);

describe('Component: Card', () => {

  it('should render correctly', () => {
    const store = mockStore({
      CAMERAS: {}
    });

    render(
      <Provider store={store}>
        <HashRouter>
          <PaginationMarker pageNumber={FAKE_PAGE_NUMBER}/>
        </HashRouter>
      </Provider>,
    );

    expect(screen.getByText(FAKE_PAGE_NUMBER.toString())).toBeInTheDocument();
  });
});
