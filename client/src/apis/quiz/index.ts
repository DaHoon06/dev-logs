import { axiosInstance } from '@libs/axios-instance/axios';

export const getQuizCategories = async () => {
  try {
    const { data } = await axiosInstance.get('/quiz/categories');
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getQuizData = async (type: string) => {
  try {
    const { data } = await axiosInstance.get(`/quiz/data/${type}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};
