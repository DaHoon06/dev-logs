import { useQuery } from 'react-query';
import { getQuizCategories } from '@apis/quiz';
import { QUERY_KEYS } from '@constants/queryKeys';
import { QuizCategories } from '@pages/index';

export const useQuiz = <T>(initialState: QuizCategories[] | T): QuizCategories[] | T => {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.QUIZ.CATEGORY, initialState],
    queryFn: getQuizCategories,
    initialData: initialState,
  });
  if (data) return data;
  else return [];
};
