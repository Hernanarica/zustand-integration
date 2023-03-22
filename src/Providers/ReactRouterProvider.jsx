import { RouterProvider } from 'react-router-dom';
import { router } from '../router/router.jsx';

export function ReactRouterProvider( { children }) {
  return (
    <RouterProvider router={ router }>
      { children }
    </RouterProvider>
  );
}