import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Card from './card';
import faker from 'faker';
import mockStore from '../../../../helpers/mock-store';

describe('Component: Card', () => {

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
      "rating": faker.datatype.number({min: 1, max: 5}),
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
          <Card camera={mockCamera} />
        </HashRouter>
      </Provider>,
    );

    const textToFind = RegExp(`${mockCamera.name}`, 'i')
    expect(screen.getByText(textToFind)).toBeInTheDocument();
  });
});
