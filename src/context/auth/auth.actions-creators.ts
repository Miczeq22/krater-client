import { AuthActionType, SET_TOKEN } from './auth.reducer';

export const setAccessToken: (accessToken: string) => AuthActionType = (accessToken) => ({
  accessToken,
  type: SET_TOKEN,
});
