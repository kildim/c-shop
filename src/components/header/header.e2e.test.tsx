import {render, screen} from '@testing-library/react';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import Header from './header';
import userEvent from '@testing-library/user-event';

describe('Component: PageError', () => {

  it('should go to the catalog page after <a> tag click ', async () => {
    const user = userEvent.setup();

    const testRouter = createMemoryRouter([
        {
          path: '/',
          element: <Header/>,
        },
        {
          path: '/catalog',
          element: <h1>'THE CATALOG PAGE'</h1>
        }
      ],
      {
        initialEntries: ['/', '/catalog'],
        initialIndex: 0
      }
    )

    render(
      <RouterProvider router={testRouter}/>
    );

    expect(screen.getByText(/Каталог/i)).toBeInTheDocument();
    const catalogLink = screen.getAllByRole('link').find((element) => element.textContent = 'Каталог');
    if (catalogLink === undefined) {
      throw 'Не найдена ссылка на каталог!'
    }
    await user.click(catalogLink);
    expect(screen.getByText(/THE CATALOG PAGE/i)).toBeInTheDocument();

  });
});
