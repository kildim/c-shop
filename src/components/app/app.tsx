import Catalog from '../catalog/catalog';
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import Layout from '../layout/layout';
import React from 'react';
import Item from '../item/item';
import Basket from '../basket/basket';
import * as S from './app.styled';

function App(): JSX.Element {
  const router = createBrowserRouter([
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
          element: <Catalog/>
        },
        {
          path: 'item',
          element: <Item/>
        },
        {
          path: 'basket',
          element: <Basket/>
        }
      ]
    }
  ]);

  return (
    <>
      <S.GlobalStyle />
      <RouterProvider
        router={router}
      />
    </>
  );
}

export default App;
