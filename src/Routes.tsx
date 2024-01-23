import { createBrowserRouter, redirect } from 'react-router-dom'
import UserCreate from './user/view/pages/UserCreate'
import Login from './login/view/pages/Login'
import App from './app/view/pages/App'
import ProductList from './app/view/pages/ProductList'

export enum routes {
  LOGIN = '/login',
  USER = '/user',
  USER_CREATE = '/user/create',
  APP = '/app',
  PRODUCTS_LIST = '/app/products/list',
}

export const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect(routes.LOGIN),
  },
  {
    path: routes.LOGIN,
    element: <Login />,
  },
  {
    path: routes.USER,
    children: [
      {
        path: 'create',
        element: <UserCreate />,
      },
    ],
  },
  {
    path: routes.APP,
    element: <App />,
    children: [
      {
        path: 'products',
        children: [
          {
            path: 'list',
            element: <ProductList />,
          },
        ],
      },
    ],
  },
])
