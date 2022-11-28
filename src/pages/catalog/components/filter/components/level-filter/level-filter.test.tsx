import {render, screen} from '@testing-library/react';
import {mockCamera} from '../../../../../../test-helpers/mock-camera';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import LevelFilter from './level-filter';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: () => ({cameras: [mockCamera, mockCamera]}
  )
}));

describe('Component: LevelFilter', () => {
  it('should render LevelFilter', () => {
    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <LevelFilter/>,
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
    expect(screen.getByText(/Уровень/i)).toBeInTheDocument();
  });
});
