import {render, screen} from '@testing-library/react';
import Basket from './basket';

describe('Component: Basket', () => {

  it('should render correctly', () => {
    render(
      <Basket/>
    );

    expect(screen.getByText(/BASKET/i)).toBeInTheDocument();
  });
});
