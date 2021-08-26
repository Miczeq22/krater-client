import { AccountDataDTO } from 'src/api/platform-access/platform-access.actions';
import {
  AuthActionType,
  SET_ACCOUNT_DATA,
  SET_EMAIL_CONFIRMED,
  SET_TOKEN,
  STOP_LOADING,
} from './auth.reducer';

export const setAccessToken: (accessToken: string) => AuthActionType = (accessToken) => ({
  accessToken,
  type: SET_TOKEN,
});

export const setAccountData: (data: AccountDataDTO) => AuthActionType = (data) => ({
  type: SET_ACCOUNT_DATA,
  ...data,
});

export const stopLoading: () => AuthActionType = () => ({
  type: STOP_LOADING,
});

export const setEmailConfirmed: () => AuthActionType = () => ({
  type: SET_EMAIL_CONFIRMED,
});
