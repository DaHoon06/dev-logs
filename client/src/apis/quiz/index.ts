import { axiosInstance } from '@libs/axios-instance/axios';

export const getQuizCategories = async () => {
  try {
    const { data } = await axiosInstance.get('/quiz-categories');
    return data;
  } catch (e) {
    console.log(e);
  }
};
