import { useQuery } from 'react-query';
import { getQuizCategories, getQuizData } from '@apis/quiz';
import { QUERY_KEYS } from '@constants/queryKeys';
import { Quiz } from '@interfaces/quiz';

export const getQuizCategoriesQuery = <T>(
  initialState: Quiz.Categories[] | T,
): Quiz.Categories[] | T => {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.QUIZ.CATEGORY, initialState],
    queryFn: getQuizCategories,
    initialData: initialState,
  });
  if (data) return data;
  else return [];
};

export const getQuizDataQuery = <T>(
  initialState: Quiz.Data[] | T,
  type: string,
): Quiz.Data[] | T => {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.QUIZ.DATA, initialState, type],
    queryFn: () => getQuizData(type),
    initialData: initialState,
  });
  if (data) return data;
  else return [];
};
