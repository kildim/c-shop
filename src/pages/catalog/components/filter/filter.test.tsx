import {render, screen} from '@testing-library/react';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import Filter from './filter';
import {mockCamera} from '../../../../test-helpers/mock-camera';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: () => ({cameras: [mockCamera, mockCamera]}
  )
}));

describe('Component: Filter', () => {
  it('should render Filter', () => {
    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <Filter/>,
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
    expect(screen.getAllByText(/Фильтр/i)).toHaveLength(2);
  });
});
