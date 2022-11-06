import {render, screen} from '@testing-library/react';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import PageError from './page-error';

describe('Component: PageError', () => {

  it('should render correctly', () => {

    const testRouter = createMemoryRouter([
        {
          path: '/',
          errorElement: <PageError/>,
        }
      ],
      {
        initialEntries: ['/', '/error'],
        initialIndex: 1
      }
    )

    render(
        <RouterProvider router={testRouter}/>
    );

    expect(screen.getByText(/Вернуться обратно/i)).toBeInTheDocument();
  });
});
