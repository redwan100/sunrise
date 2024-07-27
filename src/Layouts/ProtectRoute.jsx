import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useCurrentToken } from '../redux/features/auth/authSlice';

const ProtectRoute = ({ children }) => {
  const token = useSelector(useCurrentToken);

  if (!token) {
    return <Navigate to={'/login'} replace={true} />;
  }
  return children;
};

export default ProtectRoute;
