import type { NextApiRequest, NextApiResponse } from 'next'
import Quiz from '../../../models/Quiz';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const quiz = await Quiz.findMany({
    where: {
      user_id: Number(id),
    },
  });
  let response = {
    data: quiz,
    status : 200
  }
  res.status(200).json(response);
}