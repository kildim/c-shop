import {createBrowserRouter, LoaderFunction, Navigate} from 'react-router-dom';
import Layout from '../components/layout/layout';
import Catalog from '../pages/catalog/catalog';
import CatalogCards from '../pages/catalog/components/catalog-cards/catalog-cards';
import Product from '../pages/product/product';
import Basket from '../pages/basket/basket';
import PageError from '../components/page-error/page-error';
import {productLoader} from '../pages/product/product-loader';
import {RootRouterPath} from './root-route-path';
// import {promoLoader} from '../pages/catalog/promo-loader';
import {catalogLoader} from '../pages/catalog/catalog-loader';
// import {camerasLoader} from '../pages/catalog/cameras-loader';

const DEFAULT_CATALOG_PAGE = 'page_1';
const rootRouter = createBrowserRouter([
  {
    path: RootRouterPath.Root,
    element: <Layout/>,
    loader: catalogLoader,
    id: 'root',
    errorElement: <PageError/>,
    children: [
      {
        index: true,
        element: <Navigate to={RootRouterPath.Catalog} replace/>
      },
      {
        path: 'catalog',
        element: <Catalog/>,
        children: [
          {
            index: true,
            element: <Navigate to={DEFAULT_CATALOG_PAGE}/>
          },
          {
            path: ':id',
            element: <CatalogCards/>
          }
        ]
      },
      {
        path: `${RootRouterPath.Product}/:id`,
        loader: productLoader as LoaderFunction,
        element: <Product/>
      },
      {
        path: RootRouterPath.Basket,
        element: <Basket/>
      }
    ]
  }
]);

export {rootRouter};
