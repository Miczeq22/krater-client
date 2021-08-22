import { tokenStorage, TokenStorage } from '@storage/token/token.storage';
import axios, { AxiosRequestConfig } from 'axios';
import { AxiosConfig, createAxiosInstance } from './create-axios';
import jwt from 'jsonwebtoken';

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

const prepareConfigWithToken = (config: AxiosRequestConfig, token: string) => ({
  ...config,
  headers: {
    ...config.headers,
    'X-JWT': `Bearer ${token}`,
  },
});

const fetchRefreshToken = async (config: AxiosRequestConfig, storage: TokenStorage) => {
  const refreshTokenResponse = await fetch(`${axiosConfig.baseURL}/refresh-token`, {
    method: 'POST',
    credentials: 'include',
  });

  const responseBody = await refreshTokenResponse.json();

  if (responseBody?.error) {
    storage.resetAccessToken();

    return config;
  }

  const payload = jwt.decode(responseBody.accessToken) as {
    exp: number;
  };

  storage.setAccessToken(responseBody.accessToken, payload?.exp ?? 0);

  return prepareConfigWithToken(config, responseBody.accessToken);
};

export const createRefreshToken =
  (storage: TokenStorage) => async (config: AxiosRequestConfig | AxiosConfig) => {
    if ((config as AxiosConfig)?.skipAuthorization || storage.isTokenActive()) {
      return prepareConfigWithToken(config, storage.getAccessToken());
    }

    try {
      const result = await axios(config);

      if (result.data.errors && result.data.errors[0].message.startsWith('Access denied')) {
        return await fetchRefreshToken(config, tokenStorage);
      }

      return result;
    } catch (error) {
      return fetchRefreshToken(config, tokenStorage);
    }
  };

const instance = createAxiosInstance(axiosConfig);

export const axiosInstance = instance;
