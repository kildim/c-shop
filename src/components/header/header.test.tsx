import {render, screen} from '@testing-library/react';
import {createMemoryRouter, HashRouter, RouterProvider} from 'react-router-dom';
import Header from './header';
import {mockCamera} from '../../test-helpers/mock-camera';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: () => ({cameras: [mockCamera, mockCamera]}
  )
}))

describe('Component: Header', () => {

  it('should render correctly', () => {
    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <Header/>,
        },
      ],
      {
        initialEntries: ['/'],
        initialIndex: 0
      }
    );

    render(
      <RouterProvider router={testRouter}/>
    );

    expect(screen.getByPlaceholderText(/Поиск по сайту/i)).toBeInTheDocument();
  });
});
