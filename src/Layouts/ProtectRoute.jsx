import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useCurrentToken, useCurrentUser } from '../redux/features/auth/authSlice';

const ProtectRoute = ({ children }) => {
  const token = useSelector(useCurrentToken);
  const user = useSelector(useCurrentUser);

  if (!token || !user) {
    return <Navigate to={'/login'} replace={true} />;
  }
  return children;
};

export default ProtectRoute;
