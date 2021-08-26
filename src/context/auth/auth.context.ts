import { createContext, Dispatch } from 'react';
import { AuthActionType, AuthState } from './auth.reducer';

export type AuthStateApi = {
  state: AuthState;
  dispatch: Dispatch<AuthActionType>;
};

export const authInitialState: AuthState = {
  accessToken: '',
  isAuthorized: false,
  isEmailConfirmed: false,
  email: '',
  nickname: '',
  id: '',
  loading: true,
};

export const AuthContext = createContext<AuthState | AuthStateApi>(authInitialState);
