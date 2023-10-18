import { Prisma, PrismaClient, User } from "@prisma/client";

export type iUser = & User & {
}

function UserModel(model: PrismaClient['user']) {
  return Object.assign(model, {

  });
}

export default UserModel(new PrismaClient().user);