import type { NextApiRequest, NextApiResponse } from 'next'
import User from '../../models/Users';

type Data = {
  data?: {
    name: string | null,
    kota: string | null,
    email: string | null,
    whatsapp: string | null,
    institusi: string | null,
    nama_institusi?: string | null,
    e_nutri?: number | null,
  }
  message: string,
  status: string
}

export default async function handler(
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
    const { name, kota, email, whatsapp, institusi, nama_institusi, e_nutri } = req.body;
    if (!name || !kota || !whatsapp || !institusi || !nama_institusi || !e_nutri) {
      const error: Data = {
        status: '400',
        message: 'Bad Request',
      }
      res.status(400).json(error);
    } else {
      const useremail = await User.findFirst(
        {
          where: {
            email: {
              equals: email, // Default mode
            },
          },
        }
      )
      if (useremail?.email != "") {
        const update = await User.update({
          where: {
            email: email,
          },
          data: {
            name: name,
            kota: kota,
            email: email,
            whatsapp: whatsapp,
            institusi: institusi,
            nama_institusi: nama_institusi,
            attend: 1,
            e_nutri: parseInt(e_nutri),
          },
        })
        const response: Data = {
          data: update,
          status: '200',
          message: 'OK',
        }
        res.status(200).json(response);
      } else if (email == "") {
        const randEmail = () => {
          var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
          var charLength = chars.length;
          var result = '';
          for (var i = 0; i < 10; i++) {
            result += chars.charAt(Math.floor(Math.random() * charLength));
          }
          return result;
        }
        User.create({
          data: {
            name: name,
            kota: kota,
            email: `${randEmail()}_rndm@mail.com`,
            whatsapp: whatsapp,
            institusi: institusi,
            nama_institusi: nama_institusi,
            attend: 1,
            e_nutri: parseInt(e_nutri),
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

      }
      else {
        User.create({
          data: {
            name: name,
            kota: kota,
            email: email,
            whatsapp: whatsapp,
            institusi: institusi,
            nama_institusi: nama_institusi,
            attend: 1,
            e_nutri: parseInt(e_nutri),
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
}