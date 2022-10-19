import {createBrowserRouter, Navigate} from 'react-router-dom';
import Layout from '../components/layout/layout';
import Catalog from '../components/catalog/catalog';
import CatalogCards from '../components/catalog-cards/catalog-cards';
import Product from '../components/product/product';
import Basket from '../components/basket/basket';
import PageError from '../components/page-error/page-error';

const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <PageError />,
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
        path: 'product',
        element: <Product/>
      },
      {
        path: 'basket',
        element: <Basket/>
      },
      {
        path: 'page-error/:code',
        element: <PageError/>
      },
    ]
  }
]);

export {rootRouter};
