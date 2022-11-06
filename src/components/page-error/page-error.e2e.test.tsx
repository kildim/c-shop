import {render, screen} from '@testing-library/react';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import PageError from './page-error';

describe('Component: PageError', () => {

  it('should go history backward ', async () => {
    const user = userEvent.setup();

    const testRouter = createMemoryRouter([
        {
          path: '/',
          element: <h1>ROOT</h1>,
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

    const backwardButton = screen.getByText(/Вернуться обратно/i)
    ;
    if (backwardButton === undefined) {
      throw 'Не найдена кнопка Вернуться обратно!'
    }
    await user.click(backwardButton);

    expect(screen.getByText(/ROOT/i)).toBeInTheDocument();

  });
});
