import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import mockStore from '../../../../helpers/mock-store';
import {HashRouter} from 'react-router-dom';
import BasketAdd from './basket-add';
import * as faker from 'faker';

describe('Component: BasketAdd', () => {

  it('should render correctly', () => {
    const store = mockStore({
      CAMERAS: {}
    });

    const mockCamera = {
      "id": faker.datatype.number(),
      "name": 'FAKE NAME',
      "vendorCode": 'FAKE VENDOR',
      "type": 'FAKE TYPE',
      "category": 'FAKE CATEGORY',
      "description": 'FAKE DESCR',
      "level": 'FAKE LEVEL',
      "rating": faker.datatype.number(),
      "price": faker.datatype.number(),
      "previewImg": faker.image.imageUrl(),
      "previewImg2x": faker.image.imageUrl(),
      "previewImgWebp": faker.image.imageUrl(),
      "previewImgWebp2x": faker.image.imageUrl(),
      "reviewCount": faker.datatype.number(),
    }
    render(
      <Provider store={store}>
        <HashRouter>
          <BasketAdd card={mockCamera} handleClosePopup={() => {}}/>
        </HashRouter>
      </Provider>
    );

    expect(screen.getByText(/Добавить товар в корзину/i)).toBeInTheDocument();
  });
});
