import { NextApiRequest, NextApiResponse } from 'next';
import Quiz from '../../models/Quiz';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { user_id } = req.query;
  const quizs = await Quiz.findMany(
    {
      where: {
        user_id: {
          equals: parseInt(user_id as string), // Default mode
        },
      },
    }
  )
  res.status(200).json(quizs);
}
