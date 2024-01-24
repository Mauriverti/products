import { createBrowserRouter, redirect } from 'react-router-dom'
import App from './app/view/App'
import Login from './login/view/pages/Login'
import ProductList from './product/view/ProductList'
import ProductView from './product/view/ProductView'
import ProtectedRoutesProvider from './shared/contexts/ProtectedRoutes.provider'
import UserCreate from './user/view/pages/UserCreate'

export enum routes {
  LOGIN = '/login',
  USER = '/user',
  USER_CREATE = '/user/create',
  APP = '/app',
  PRODUCTS_LIST = '/app/products/list',
}

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutesProvider />,
    children: [
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
              {
                path: ':id',
                element: <ProductView />,
              },
            ],
          },
        ],
      },
    ],
  },
])
