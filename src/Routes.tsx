import { createBrowserRouter, redirect } from 'react-router-dom';
import UserCreate from './user/view/pages/UserCreate';
import Login from './login/view/pages/Login';

export enum routes {
  LOGIN = '/login',
  USER = '/user',
  USER_CREATE = '/user/create'
}

export const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect(routes.LOGIN)
  },
  {
    path: routes.LOGIN,
    element: (<Login />)
  },
  {
    path: routes.USER,
    children: [
      {
        path: 'create',
        element: (<UserCreate />)
      }
    ],
  }
]);
