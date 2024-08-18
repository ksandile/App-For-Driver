// src/hooks/useAuth.js
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Adjust the path if needed

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
