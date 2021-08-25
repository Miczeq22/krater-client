import { AuthContext, AuthStateApi } from '@context/auth/auth.context';
import { useContext } from 'react';

export const useAuthState = () => {
  const context = useContext(AuthContext) as AuthStateApi;

  if (!context || !context.dispatch) {
    throw new Error('useAuthState must be used within an AuthProvider');
  }

  return context;
};
