import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import mockStore from '../../../../test-helpers/mock-store';
import CatalogCards from './catalog-cards';
import {mockCamera} from '../../../../test-helpers/mock-camera';
jest.mock('../../../../hooks/use-page', () => () => 1);

describe('Component: Card', () => {

  it('should render correctly', () => {
    const store = mockStore({
      CAMERAS: {
        cameras: Array(2).fill(null).map(() => mockCamera),
      }
    });

    render(
      <Provider store={store}>
        <HashRouter>
          <CatalogCards/>
        </HashRouter>
      </Provider>,
    );


    const textToFind = RegExp(`${mockCamera.name}`, 'i');
    expect(screen.getByText(textToFind)).toBeInTheDocument();
  });
});
