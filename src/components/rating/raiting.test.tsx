import {render, screen} from '@testing-library/react';
import Rating from './rating';

describe('Component: Raiting', () => {

  it('should render correctly', () => {
    render(
      <Rating rating={5}/>
    );

    expect(screen.getByText(/символьное изображение рейтинга/i)).toBeInTheDocument();
  });
});
