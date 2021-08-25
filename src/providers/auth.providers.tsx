import { AuthContext, authInitialState } from '@context/auth/auth.context';
import { AuthActionType, authReducer, AuthState } from '@context/auth/auth.reducer';
import { authStorage } from '@context/auth/auth.storage';
import { ReactNode, Reducer, useEffect, useReducer } from 'react';
import jwt from 'jsonwebtoken';

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer<Reducer<AuthState, AuthActionType>>(authReducer, {
    ...authInitialState,
    accessToken: authStorage.getAccessToken() ?? '',
    isAuthorized: authStorage.getAccessToken() !== null,
  });

  useEffect(() => {
    authStorage.setAccessToken(state.accessToken);

    jwt.decode(state.accessToken) as { userId: string; username: string };
  }, [state.accessToken]);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};
