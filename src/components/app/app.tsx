import {RouterProvider} from 'react-router-dom';
import React, {useEffect} from 'react';
import * as S from './app.styled';
import {fetchInitData} from '../../services/api/api';
import {useDispatch} from 'react-redux';
import {ThunkAppDispatch} from '../../types/thunk-app-dispatch';
import {rootRouter} from '../../routers/root-router';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => (dispatch as ThunkAppDispatch)(fetchInitData()), [dispatch]);


  return (
    <>
      <S.GlobalStyle/>
      <RouterProvider
        router={rootRouter}
      />
    </>
  );
}

export default App;
