import {createBrowserRouter, LoaderFunction, Navigate} from 'react-router-dom';
import Layout from '../components/layout/layout';
import Catalog from '../pages/catalog/catalog';
import CatalogCards from '../pages/catalog/components/catalog-cards/catalog-cards';
import Product from '../pages/product/product';
import Basket from '../pages/basket/basket';
import PageError from '../components/page-error/page-error';
import {productLoader} from '../pages/product/product-loader';

const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <PageError/>,
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
        path: 'product/:id',
        loader: productLoader as LoaderFunction,
        element: <Product/>
      },
      {
        path: 'basket',
        element: <Basket/>
      }
    ]
  }
]);

export {rootRouter};
