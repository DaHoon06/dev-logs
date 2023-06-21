import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {
  AuthorizationException,
  ForbiddenException,
  NotAllowedMethodException,
  NotFoundException
} from "@utils/errorHandler";

const baseURL = '/api';
const instance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
});

function AxiosAuthInterceptor<T>(response: AxiosResponse<T>): AxiosResponse {
  const status = response.status;
  if (status === 401) throw new AuthorizationException();
  if (status === 403) throw new ForbiddenException();
  if (status === 404) throw new NotFoundException();
  if (status === 405) throw new NotAllowedMethodException();
  return response;
}

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    AxiosAuthInterceptor(response);
    return response;
  },
);
export const axiosInstance = instance;
