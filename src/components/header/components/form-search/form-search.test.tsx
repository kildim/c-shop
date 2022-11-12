import {render, screen} from '@testing-library/react';
import FormSearch from './form-search';

describe('Component: FormSearch', () => {

  it('should render correctly', () => {
    render(
        <FormSearch/>
    );
    expect(screen.getByPlaceholderText(/Поиск по сайту/i)).toBeInTheDocument();
  });
});
