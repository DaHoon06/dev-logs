import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../../constants/queryKeys';
import { axiosInstance } from '@libs/axios-instance/axios';

export function useGitHub() {
  const getEventList = async (url: string) => {
    const { data = [] } = useQuery([QUERY_KEYS.USER.GITHUB, url], () => getEventLists(url));
    return data;
  };

  return { getEventList };
}

export const getEventLists = async (url: string) => {
  const { data } = await axiosInstance.get(url);
  console.log(data);
  return data;
};
