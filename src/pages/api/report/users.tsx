import { NextApiRequest, NextApiResponse } from "next";
import Users from "../../../models/Users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // get users with pagination next page
  const { page, data } = req.query;
  if (data) {
    const users = await Users.findMany({
      where: {
        attend: 1,
        OR: [
          {
            name: {
              contains: String(data),
            },
          },
          {
            email: {
              contains: String(data),
            },
          },
          {
            whatsapp: {
              contains: String(data),
            },
          },
        ],
      },
      take: 10,
      skip: (Number(page) - 1) * 10,
    });
    const totalUsers = await Users.findMany({
      where: {
        attend: 1,
        OR: [
          {
            name: {
              contains: String(data),
            },
          },
          {
            email: {
              contains: String(data),
            },
          },
          {
            whatsapp: {
              contains: String(data),
            },
          },
        ],
      },
    });
    const response = {
      data: users,
      current_page: Number(page),
      last_page: Math.ceil(totalUsers.length / 10),
      total: totalUsers.length,
    };
    res.status(200).json(response);
    return;
  } else {
    const users = await Users.findMany({
      where: {
        attend: 1,
      },
      take: 10,
      skip: (Number(page) - 1) * 10,
    });
    const totalUsers = await Users.findMany({
      where: {
        attend: 1,
      },
    });
    const response = {
      data: users,
      current_page: Number(page),
      last_page: Math.ceil(totalUsers.length / 10),
      total: totalUsers.length,
    };
    res.status(200).json(response);
  }
}
