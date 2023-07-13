import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { Quiz } from '@interfaces/quiz';

const quizCategoriesHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Only GET requests allowed' });
  }

  if (!req.query.type) {
    return res.status(400).json({ message: 'Empty Query Type' });
  }

  const { type } = req.query as { type: string };

  const getQuizData = fs.readFileSync('public/temp-db/quiz/quizData.json', {
    encoding: 'utf-8',
  });
  const data = JSON.parse(getQuizData).filter((value: Quiz.Data) => value.type === type);

  return res.status(200).json(data);
};

export default quizCategoriesHandler;
