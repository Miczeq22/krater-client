import axios, { AxiosRequestConfig } from 'axios';

export interface AxiosConfig extends AxiosRequestConfig {
  skipAuthorization?: boolean;
}

export const createAxiosInstance = (config: AxiosConfig) => axios.create(config);
