import { Prisma, PrismaClient, QuizUserAnswer } from "@prisma/client";

export type iQuiz = & QuizUserAnswer & {
}

function QuizUserAnswer(model: PrismaClient['quizUserAnswer']) {
  return Object.assign(model, {

  });
}

export default QuizUserAnswer(new PrismaClient().quizUserAnswer);