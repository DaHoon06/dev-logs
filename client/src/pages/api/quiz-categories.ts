import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

const quizCategoriesHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Only GET requests allowed' });
  }
  const categoryData = fs.readFileSync('public/temp-db/quizCategories.json', { encoding: 'utf-8' });
  return res.status(200).json(JSON.parse(categoryData));
};

export default quizCategoriesHandler;
