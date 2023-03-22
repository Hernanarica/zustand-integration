import { createBrowserRouter } from 'react-router-dom';
import {
  Dashboard,
  Home,
  Login,
  UserCreate,
  UserDetail,
  UserEdit
} from '../views';
import { PublicLayout } from '../layouts';
import { AuthProvider } from '../Providers/index.js';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'dashboard',
        element: <AuthProvider> <Dashboard /> </AuthProvider>,
        children: [
          {
            index: true,
            element: <div className="flex items-center justify-center min-h-[calc(100vh-72px)]"><h1 className="text-gray-300 text-4xl font-bold">Pagina de inicio</h1></div>
          },
          {
            path: 'users',
            children: [
              {
                path: 'create',
                element: <UserCreate />
              },
              {
                path: ':userId/edit',
                element: <UserEdit />
              },
              {
                path: ':userId',
                element: <UserDetail />
              }
            ]
          }
        ]
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
]);