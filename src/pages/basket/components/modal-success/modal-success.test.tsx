import {render, screen} from '@testing-library/react';
import ModalSuccess from './modal-success';
import {HashRouter} from 'react-router-dom';

describe('Component: ModalSuccess:', () => {
  it('should render correct', () => {
    render(
      <HashRouter>
        <ModalSuccess onClosePopup={() => undefined}/>
      </HashRouter>
    );
    expect(screen.getByText(/Спасибо за покупку/i)).toBeInTheDocument();
  });
});
