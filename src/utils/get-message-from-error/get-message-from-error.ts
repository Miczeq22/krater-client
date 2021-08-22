import { AxiosError } from 'axios';

export const getErrorFromMessage = (err: AxiosError): string => {
  const { data } = err.response!;

  if (data.details) {
    return `${err.response?.data.details[0].message}`;
  }

  return `${err.response?.data.name}: ${err.response?.data.error}`;
};
