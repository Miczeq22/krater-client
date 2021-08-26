import { LoginPayload } from 'src/app/login/login-form/login-form';
import { RegisterPayload } from 'src/app/register/register-form/register-form';
import { axiosInstance } from '../axios/axios-instance';
import { AxiosConfig } from '../axios/create-axios';

export interface AccountDataDTO {
  id: string;
  email: string;
  nickname: string;
  isEmailConfirmed: boolean;
}

export const GET_ACCOUNT_DATA_ACTION_CACHE_KEY = 'get-account-data';

export const getAccountDataAction = () => axiosInstance.get<AccountDataDTO>('/account-data');

export const loginAction = (payload: LoginPayload) =>
  axiosInstance.post('/login', payload, {
    skipAuthorization: true,
  } as AxiosConfig);

export const registerAction = (payload: Omit<RegisterPayload, 'confirmPassword'>) =>
  axiosInstance.post('/register', payload, {
    skipAuthorization: true,
  } as AxiosConfig);

export const confirmEmailAction = (activationCode: string) =>
  axiosInstance.patch('/confirm-email', {
    activationCode,
  });
