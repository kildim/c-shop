import {render, screen} from '@testing-library/react';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import {mockCamera} from '../../../../test-helpers/mock-camera';
import Sort from './sort';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: () => ({cameras: [mockCamera, mockCamera]}
  )
}));

describe('Component: Sort', () => {
  it('should render Sort', () => {
    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <Sort />,
        },
      ],
      {
        initialEntries: ['/'],
        initialIndex: 0
      }
    );

    render (
      <RouterProvider router={testRouter}/>
    );
    expect(screen.getByText(/Сортировать/i)).toBeInTheDocument();
  });
});
