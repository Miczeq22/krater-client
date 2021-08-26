/* eslint-disable @typescript-eslint/no-shadow */
import axios, { AxiosRequestConfig } from 'axios';
import { AxiosConfig, createAxiosInstance } from './create-axios';
import { AuthStorage, authStorage } from '@context/auth/auth.storage';

export const axiosConfig = {
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  timeout: 15000,
  timeoutErrorMessage: 'Request timeout.',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  skipAuthorization: false,
  withCredentials: true,
};

const prepareConfigWithToken = (config: AxiosRequestConfig, token: string | null) => ({
  ...config,
  headers: {
    ...config.headers,
    'X-Auth-Token': `Bearer ${token ?? ''}`,
  },
});

const fetchRefreshToken = async (config: AxiosRequestConfig, authStorage: AuthStorage) => {
  const refreshTokenResponse = await fetch(`${axiosConfig.baseURL}/refresh-token`, {
    method: 'POST',
    credentials: 'include',
  });

  const responseBody = await refreshTokenResponse.json();

  if (responseBody?.error) {
    authStorage.setAccessToken(null);

    return config;
  }

  authStorage.setAccessToken(responseBody.accessToken);

  return prepareConfigWithToken(config, responseBody.accessToken);
};

export const createRefreshToken =
  (authStorage: AuthStorage) => async (config: AxiosRequestConfig | AxiosConfig) => {
    if ((config as AxiosConfig)?.skipAuthorization || authStorage.getAccessToken()) {
      return prepareConfigWithToken(config, authStorage.getAccessToken());
    }

    try {
      const result = await axios(config);

      if (result.data.errors && result.data.errors[0].message.startsWith('Access denied')) {
        return await fetchRefreshToken(config, authStorage);
      }

      return result;
    } catch (error) {
      return fetchRefreshToken(config, authStorage);
    }
  };

const instance = createAxiosInstance(axiosConfig);

instance.interceptors.request.use(createRefreshToken(authStorage));

export const axiosInstance = instance;
