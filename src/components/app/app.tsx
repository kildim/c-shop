import Catalog from '../catalog/catalog';
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import Layout from '../layout/layout';
import React, {useEffect} from 'react';
import Item from '../item/item';
import Basket from '../basket/basket';
import * as S from './app.styled';
import {fetchInitData} from '../../services/api/api';
import {useDispatch} from 'react-redux';
import {ThunkAppDispatch} from '../../types/thunk-app-dispatch';
import ApiError from '../Api-Error/api-error';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => (dispatch as ThunkAppDispatch)(fetchInitData()), [dispatch]);

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
        },
        {
          path: 'api-error',
          element: <ApiError/>
        }
      ]
    }
  ]);

  return (
    <>
      <S.GlobalStyle/>
      <RouterProvider
        router={router}
      />
    </>
  );
}

export default App;
