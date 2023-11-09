import { Prisma, PrismaClient, AnswerNew } from "@prisma/client";

export type iAnswerNew = & AnswerNew & {
}

function AnswerNew(model: PrismaClient['answerNew']) {
  return Object.assign(model, {

  });
}

export default AnswerNew(new PrismaClient().answerNew);