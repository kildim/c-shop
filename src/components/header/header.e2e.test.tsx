import {render, screen} from '@testing-library/react';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import Header from './header';
import userEvent from '@testing-library/user-event';
import {mockCamera} from '../../test-helpers/mock-camera';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: () => ({cameras: [mockCamera, mockCamera]}
  )
}))

describe('Component: Header', () => {

  it('should go to the catalog page after <a> tag click', async () => {
    const user = userEvent.setup();

    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <Header/>,
        },
        {
          path: '/catalog',
          element: <h1>THE CATALOG PAGE</h1>
        }
      ],
      {
        initialEntries: ['/', '/catalog'],
        initialIndex: 0
      }
    );

    render(
      <RouterProvider router={testRouter}/>
    );

    expect(screen.getByText(/Каталог/i)).toBeInTheDocument();
    const catalogLink = screen.getAllByRole('link').find((element) => element.textContent === 'Каталог');
    if (catalogLink === undefined) {
      return false;
    }
    await user.click(catalogLink);
    expect(screen.getByText(/THE CATALOG PAGE/i)).toBeInTheDocument();

  });
});
