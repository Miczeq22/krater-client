import { setAccountData, stopLoading } from '@context/auth/auth.actions-creators';
import { AuthContext, authInitialState } from '@context/auth/auth.context';
import { AuthActionType, authReducer, AuthState } from '@context/auth/auth.reducer';
import { authStorage } from '@context/auth/auth.storage';
import { ReactNode, Reducer, useEffect, useReducer } from 'react';
import { useQuery } from 'react-query';
import {
  getAccountDataAction,
  GET_ACCOUNT_DATA_ACTION_CACHE_KEY,
} from 'src/api/platform-access/platform-access.actions';

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const { refetch, data: res } = useQuery(GET_ACCOUNT_DATA_ACTION_CACHE_KEY, getAccountDataAction, {
    enabled: false,
  });

  const [state, dispatch] = useReducer<Reducer<AuthState, AuthActionType>>(authReducer, {
    ...authInitialState,
    accessToken: authStorage.getAccessToken() ?? '',
    isAuthorized: authStorage.getAccessToken() !== null,
  });

  useEffect(() => {
    if (state.accessToken) {
      authStorage.setAccessToken(state.accessToken);
      refetch();
    } else {
      dispatch(stopLoading());
    }
  }, [state.accessToken, refetch]);

  useEffect(() => {
    if (!res?.data) {
      return;
    }

    dispatch(setAccountData(res.data));
    dispatch(stopLoading());
  }, [res]);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};
