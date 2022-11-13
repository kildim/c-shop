import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './store/reducers/root-reducer';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
// import {ThunkAppDispatch} from './types/thunk-app-dispatch';
// import {fetchInitData} from './services/api/api';
import {rootRouter} from './routers/root-router';
import {RouterProvider} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

// (store.dispatch as ThunkAppDispatch)(fetchInitData());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={rootRouter}/>
    </Provider>
  </React.StrictMode>
);
