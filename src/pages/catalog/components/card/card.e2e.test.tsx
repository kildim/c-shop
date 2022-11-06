import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Card from './card';
import mockStore from '../../../../test-helpers/mock-store';
import {mockCamera} from '../../../../test-helpers/mock-camera';
import userEvent from '@testing-library/user-event/index';
import {ActionType} from '../../../../types/action-type';

describe('Component: Card', () => {

  it('should dispatch setBuyPopupShown on button click', async () => {
    const store = mockStore({
      CAMERAS: {}
    });

    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <HashRouter>
          <Card camera={mockCamera} />
        </HashRouter>
      </Provider>,
    );

    const buttonToBuy = screen.getByText(/Купить/i);
    await user.click(buttonToBuy);
    expect(store.getActions()[0]).toBe(ActionType.SetIsBuyPopupShown);
  });
});
