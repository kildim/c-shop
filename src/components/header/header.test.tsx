import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import Header from './header';

describe('Component: Header', () => {

  it('should render correctly', () => {
    render(
      <HashRouter>
        <Header/>
      </HashRouter>
    )
    expect(screen.getByPlaceholderText(/Поиск по сайту/i)).toBeInTheDocument();
  })
})
