import {render, screen} from '@testing-library/react';
import CategoryFilter from './category-filter';
import {mockCamera} from '../../../../../../test-helpers/mock-camera';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: () => ({cameras: [mockCamera, mockCamera]}
  )
}));

describe('Component: CategoryFilter', () => {
  it('should render CategoryFilter', () => {
    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <CategoryFilter/>,
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
    expect(screen.getByText(/Фотокамера/i)).toBeInTheDocument();
  });
});
