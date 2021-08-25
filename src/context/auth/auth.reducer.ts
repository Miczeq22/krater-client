import { AppAction } from 'src/types.d';

export const SET_TOKEN = 'auth/set-token';

export interface AuthState {
  accessToken: string;
  isAuthorized: boolean;
  isEmailConfirmed: boolean;
}

export type AuthActionType = AppAction<typeof SET_TOKEN, { accessToken: string }>;

export const authReducer = (state: AuthState, action: AuthActionType): AuthState => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken,
        isAuthorized: true,
      };

    default:
      return state;
  }
};
