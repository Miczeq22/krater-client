import { LoginPayload } from 'src/app/login/login-form/login-form';
import { axiosInstance } from '../axios/axios-instance';

export const loginAction = (payload: LoginPayload) => axiosInstance.post('/login', payload);
