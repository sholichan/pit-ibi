import type { NextApiRequest, NextApiResponse } from 'next'
import User from '../../models/Users';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { kota, name } = req.query;
  const users = await User.findMany(
    {
      where: {
        kota: {
          equals: kota as string, // Default mode
        },
        name: {
          contains: name as string, // Default mode
        },
      },
    }
  )
  res.status(200).json(users);
}