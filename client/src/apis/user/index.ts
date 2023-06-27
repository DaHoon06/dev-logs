import { axiosInstance } from '@libs/axios-instance/axios';
import { Social } from '@interfaces/Social';

export const SignIn = async (code: string): Promise<Social.Github> => {
  const { data } = await axiosInstance.get(`/oauth/callback?code=${code}`);
  return data;
};
