// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Correct import for default export

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { user } = useAuth(); // Use the custom hook to get auth status

  return user ? <Element {...rest} /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
