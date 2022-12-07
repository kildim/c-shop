import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import ModalError from './modal-error';

describe('Component: ModalSuccess:', () => {
  it('should render correct', () => {
    render(
      <HashRouter>
        <ModalError onClosePopup={() => undefined}/>
      </HashRouter>
    );
    expect(screen.getByText(/Сервер отклонил/i)).toBeInTheDocument();
  });
});
