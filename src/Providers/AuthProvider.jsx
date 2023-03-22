import { Navigate, useLocation } from 'react-router-dom';

export function AuthProvider({ children }) {
  const location = useLocation();
  const isAuth = true

  return isAuth
    ? children
    : <Navigate to="/login" state={{ from: location }}  replace />
}