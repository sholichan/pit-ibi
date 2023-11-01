import { NextApiRequest, NextApiResponse } from "next";
import Users from "../../../models/Users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // get users with pagination next page
  const { page } = req.query;
  const users = await Users.findMany({
    where: {
      attend: 1,
    },
    take: 20,
    skip: (Number(page) - 1) * 20,
  });
  const totalUsers = await Users.findMany({
    where: {
      attend: 1,
    },
  });
  const response = {
    data: users,
    current_page: Number(page),
    last_page: Math.ceil(totalUsers.length / 20),
    total: totalUsers.length,
  };
  res.status(200).json(response);
}
