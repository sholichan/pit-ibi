import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Data = {
  data?: {
    name: string | null,
    kota: string | null,
    email: string | null,
    whatsapp: string | null,
    institusi: string | null,
    nama_institusi?: string | null,
  }
  message: string,
  status: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== 'POST') {
    const error: Data = {
      status: '405',
      message: 'Method not allowed',
    }
    res.status(405).json(error);
  } else {
    const { name, kota, email, whatsapp, institusi, nama_institusi, } = req.body;
    if (!name || !kota || !email || !whatsapp || !institusi || !nama_institusi) {
      const error: Data = {
        status: '400',
        message: 'Bad Request',
      }
      res.status(400).json(error);
    } else {
      prisma.user.create({
        data: {
          name: name,
          kota: kota,
          email: email,
          whatsapp: whatsapp,
          institusi: institusi,
          nama_institusi: nama_institusi,
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
          const response: Data = {
            status: '400',
            message: 'email already exist',
          }
          res.status(400).json(response);
        })
    }
  }
}