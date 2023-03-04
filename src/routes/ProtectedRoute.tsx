import React, { FC, ReactElement } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  condition: boolean,
  redirectTo: string,
  children: ReactElement
}

const ProtectedRoute: FC<ProtectedRouteProps> = (
  { condition, redirectTo, children }
) => {
  const { pathname } = useLocation();
  return (
    condition ?
      children :
      <Navigate to={redirectTo} state={{ from: pathname }}/>
  );
};

export default ProtectedRoute;
