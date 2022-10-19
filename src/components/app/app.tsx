import {RouterProvider} from 'react-router-dom';
import React, {useEffect} from 'react';
import {fetchInitData} from '../../services/api/api';
import {useDispatch} from 'react-redux';
import {ThunkAppDispatch} from '../../types/thunk-app-dispatch';
import {rootRouter} from '../../routers/root-router';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => (dispatch as ThunkAppDispatch)(fetchInitData()), [dispatch]);

  return <RouterProvider router={rootRouter}/>;
}

export default App;
