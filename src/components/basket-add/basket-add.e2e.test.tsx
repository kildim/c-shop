import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import mockStore from '../../test-helpers/mock-store';
import {HashRouter} from 'react-router-dom';
import BasketAdd from './basket-add';
import {mockCamera} from '../../test-helpers/mock-camera';
import userEvent from '@testing-library/user-event';

describe('Component: BasketAdd', () => {

  it('should call onClosePopupClick', async () => {
    const store = mockStore({
      CAMERAS: {}
    });
    const user = userEvent.setup();

    const handleClosePopupClick = jest.fn();

    render(
      <Provider store={store}>
        <HashRouter>
          <BasketAdd card={mockCamera} onClosePopupClick={handleClosePopupClick}/>
        </HashRouter>
      </Provider>
    );
    const buttonClose = await screen.findByLabelText('Закрыть попап');
    await user.click(buttonClose);
    expect(handleClosePopupClick).toHaveBeenCalled();
  });
});
