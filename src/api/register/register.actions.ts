import { RegisterPayload } from 'src/app/register/register-form/register-form';
import { axiosInstance } from '../axios/axios-instance';

export const registerAction = (payload: Omit<RegisterPayload, 'confirmPassword'>) =>
  axiosInstance.post('/register', payload);
