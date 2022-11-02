import {render, screen} from '@testing-library/react';
import Footer from './footer';
import {HashRouter} from 'react-router-dom';

describe('Component: Footer', () => {

  it('should render correctly', () => {
    render(
      <HashRouter>
        <Footer/>
      </HashRouter>
    )
    expect(screen.getByText(/Интернет-магазин фото- и видеотехники/i)).toBeInTheDocument();
  })
})
