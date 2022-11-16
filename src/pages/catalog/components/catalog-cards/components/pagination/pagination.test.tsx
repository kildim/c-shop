import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import mockStore from '../../../../../../test-helpers/mock-store';
import Pagination from './pagination';
import {RootReducerType} from '../../../../../../store/reducers/root-reducer';
jest.mock('../../../../hooks/use-page', () => () => 1);

describe('Component: Pagination', () => {

  it('should render correctly', () => {

    const store = mockStore({
      CAMERAS: {
      }
    });

    render(
      <Provider store={store}>
        <HashRouter>
          <Pagination cameras={(store.getState() as RootReducerType).CAMERAS.cameras}/>
        </HashRouter>
      </Provider>,
    );


    expect(screen.getByText(/Назад/i)).toBeInTheDocument();
  });
});
