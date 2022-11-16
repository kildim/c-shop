import {render, screen} from '@testing-library/react';
import FormSearch from './form-search';
import {mockCamera} from '../../../../test-helpers/mock-camera';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';

jest.mock('react-router-dom', (): ReturnType<typeof jest.requireActual> => ({
  ...jest.requireActual('react-router-dom'),
  useRouteLoaderData: () => ({cameras: [mockCamera, mockCamera]}
  )
}));

describe('Component: FormSearch', () => {

  it('should render correctly', () => {
    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <FormSearch/>,
        }
      ],
      {
        initialEntries: ['/'],
        initialIndex: 0
      }
    );

    render(<RouterProvider router={testRouter}/>);
    expect(screen.getByPlaceholderText(/Поиск по сайту/i)).toBeInTheDocument();
  });
});
