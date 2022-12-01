import {render, screen} from '@testing-library/react';
import Basket from './basket';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';

describe('Component: Basket', () => {

  it('should render correctly', () => {
    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <Basket/>,
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

    expect(screen.getByText(/Корзина/i)).toBeInTheDocument();
  });
});
