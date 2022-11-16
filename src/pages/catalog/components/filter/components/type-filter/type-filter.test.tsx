import {render, screen} from '@testing-library/react';
import {mockCamera} from '../../../../../../test-helpers/mock-camera';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import TypeFilter from './type-filter';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: () => ({cameras: [mockCamera, mockCamera]}
  )
}));

describe('Component: TypeFilter', () => {
  it('should render TypeFilter', () => {
    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <TypeFilter/>,
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
    expect(screen.getByText(/Тип камеры/i)).toBeInTheDocument();
  });
});
