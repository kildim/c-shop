import {render, screen} from '@testing-library/react';
import {HashRouter} from 'react-router-dom';
import ReviewsSection from './reviews-section';
import {mockReview} from '../../../../test-helpers/mock-review';
import {mockCamera} from '../../../../test-helpers/mock-camera';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useAsyncValue: () => [mockReview]
}));

describe('Component: ReviewsSection', () => {
  it('should render correctly', () => {
    render(
      <HashRouter>
        <ReviewsSection id={mockCamera.id}/>
      </HashRouter>
    );

    expect(screen.getByText(/Показать больше отзывов/i)).toBeInTheDocument();
  });
});
