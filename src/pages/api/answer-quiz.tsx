import { NextApiRequest, NextApiResponse } from 'next';
import Quiz from '../../models/Quiz';

type Data = {
  data?: {
    quiz: Number | null,
    user_id: Number | null,
    pertanyaan: string | null,
    jawaban: string | null,
    status: Number | null,
  }
  status: string,
  message: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    const error: Data = {
      status: '405',
      message: 'Method not allowed',
    }
    res.status(405).json(error);
  } else { 
    const { user_id, pertanyaan, jawaban, status, quiz } = req.body;
    if (!user_id || !quiz|| !pertanyaan || !jawaban || !status) {
      const error: Data = {
        status: '400',
        message: 'Bad Request',
      }
      res.status(400).json(error);
    } else {
      const quizs = await Quiz.findMany(
        {
          where: {
            quiz: {
              equals: parseInt(quiz as string), // Default mode
            },
            user_id: {
              equals: parseInt(user_id as string), // Default mode
            },
          },
        }
      )
      if (!quizs) {
        Quiz.create({
          data: {
            user: {
              connect: {
                id: parseInt(user_id),
              },
            },
            pertanyaan: pertanyaan,
            jawaban: jawaban,
            status: parseInt(status),
            quiz: parseInt(quiz),
          },
        })
          .then((data) => {
            const response: Data = {
              data: data,
              status: '200',
              message: 'OK',
            }
            res.status(200).json(response);
          })
          .catch((error) => {
            console.log('Error: ', error);
            const response: Data = {
              status: '400',
              message: 'something wrong',
            }
            res.status(400).json(error.message);
          })
      } else {
        Quiz.update({
          where: {
            id: quizs[0].id,
          },
          data: {
            pertanyaan: pertanyaan,
            jawaban: jawaban,
            status: parseInt(status),
          },
        })
          .then((data) => {
            const response: Data = {
              data: data,
              status: '200',
              message: 'OK',
            }
            res.status(200).json(response);
          })
          .catch((error) => {
            console.log('Error: ', error);
            const response: Data = {
              status: '400',
              message: 'something wrong',
            }
            res.status(400).json(error.message);
          })
      }
    }
  }
}