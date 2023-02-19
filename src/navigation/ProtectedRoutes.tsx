import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { HOME, LOGIN } from '../navigation/routes';
import { userAtom } from '../store/atoms/userAtom';

export const ProtectedRoute: React.FC<{ authRequired?: boolean }> = ({ authRequired = false }) => {
  const auth = useRecoilValue(userAtom);
  const { token } = auth;

  if (authRequired) {
    return token ? <Outlet /> : <Navigate to={LOGIN} />;
  }
  return !token ? <Outlet /> : <Navigate to={HOME} />;
};
