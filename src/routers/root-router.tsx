import {createBrowserRouter, Navigate} from 'react-router-dom';
import Layout from '../components/layout/layout';
import Catalog from '../components/catalog/catalog';
import CatalogCards from '../components/catalog-cards/catalog-cards';
import Item from '../components/item/item';
import Basket from '../components/basket/basket';
import ApiError from '../components/Api-Error/api-error';

const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Navigate to={'catalog'} replace/>
      },
      {
        path: 'catalog',
        element: <Catalog/>,
        children: [
          {
            index: true,
            element: <Navigate to={'page_1'}/>
          },
          {
            path: ':id',
            element: <CatalogCards/>
          }
        ]
      },
      {
        path: 'item',
        element: <Item/>
      },
      {
        path: 'basket',
        element: <Basket/>
      },
      {
        path: 'api-error',
        element: <ApiError/>
      },
    ]
  }
]);

export {rootRouter};
