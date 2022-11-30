import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import Pagination from './pagination';
import {mockCamera} from '../../../../../../test-helpers/mock-camera';

jest.mock('../../../../../../hooks/use-page', () => () => 1);

describe('Component: Pagination', () => {
  it('should render correctly', () => {
    render(
      <HashRouter>
        <Pagination cameras={[mockCamera, mockCamera]}/>
      </HashRouter>
    );

    expect(screen.getByText(/Назад/i)).toBeInTheDocument();
  });
});
