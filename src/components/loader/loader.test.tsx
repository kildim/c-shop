import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import Loader from './loader';

describe('Component: Loader', () => {

  it('should render correctly', () => {
    render(
        <HashRouter>
          <Loader/>
        </HashRouter>
    );

    expect(screen.getByText(/Loading .../i)).toBeInTheDocument();
  });
});
