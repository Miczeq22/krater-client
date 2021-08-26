import { AppAction } from 'src/types.d';

export const SET_TOKEN = 'auth/set-token';

export const SET_ACCOUNT_DATA = 'auth/set-account-data';

export const STOP_LOADING = 'auth/stop-loading';

export const SET_EMAIL_CONFIRMED = 'auth/set-email-confirmed';

export interface AuthState {
  accessToken: string;
  isAuthorized: boolean;
  isEmailConfirmed: boolean;
  id: string;
  email: string;
  nickname: string;
  loading: boolean;
}

export type AuthActionType =
  | AppAction<typeof SET_TOKEN, { accessToken: string }>
  | AppAction<
      typeof SET_ACCOUNT_DATA,
      {
        id: string;
        email: string;
        nickname: string;
        isEmailConfirmed: boolean;
      }
    >
  | AppAction<typeof STOP_LOADING>
  | AppAction<typeof SET_EMAIL_CONFIRMED>;

export const authReducer = (state: AuthState, action: AuthActionType): AuthState => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken,
        isAuthorized: true,
      };

    case SET_ACCOUNT_DATA: {
      const { type, ...data } = action;

      return {
        ...state,
        ...data,
      };
    }

    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };

    case SET_EMAIL_CONFIRMED:
      return {
        ...state,
        isEmailConfirmed: true,
      };

    default:
      return state;
  }
};
