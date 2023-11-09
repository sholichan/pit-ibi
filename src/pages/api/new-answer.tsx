import type { NextApiRequest, NextApiResponse } from "next";
import AnswerNew from "@/models/AnswerNew";
import User from "@/models/Users";
import { PrismaClient } from "@prisma/client";

const quiz = [
  {
    id: 1,
    question:
      "SGM dengan (…) formulasi unik gabungan Zat Besi (Iron) dan Vitamin C yang dapat bantu meningkatkan penyerapan zat besi 2X Lipat.",
    answer1: {
      a: {
        answer: "IronC",
        correct: true,
      },
      b: {
        answer: "Triple A",
        correct: false,
      },
    },
  },
  {
    id: 2,
    question:
      "SGM dengan DHA dari Minyak Ikan (…) berkualitas, salah satu minyak ikan terbaik dengan Kandungan DHA 2x Lipat.",
    answer1: {
      a: {
        answer: "Tuna",
        correct: true,
      },
      b: {
        answer: "Kod",
        correct: false,
      },
    },
  },
  {
    id: 3,
    question:
      "(….) merupakan kombinasi unik dari AA, DHA, LA dari Bebelove untuk perkembangan otak",
    answer1: {
      a: {
        answer: "Triple D",
        correct: false,
      },
      b: {
        answer: "Triple A",
        correct: true,
      },
    },
  },
  {
    id: 4,
    question:
      "(….) merupakan prebiotik yang paling banyak diteliti dan terbukti klinis memperbaiki frekuensi BAB, melunakkan konsistensi feses dan menaikkan jumlah bakteri baik.",
    answer1: {
      a: {
        answer: "FOS:GOS",
        correct: true,
      },
      b: {
        answer: "L.Reuteri",
        correct: false,
      },
    },
  },
  {
    id: 5,
    question:
      "Jika ASI tidak dapat diberikan karena indikasi medis, Formula isolat protein soya merupakan nutrisi alternatif untuk indikasi gejala alergi (…)",
    answer1: {
      a: {
        answer: "Ringan-Sedang",
        correct: true,
      },
      b: {
        answer: "Berat",
        correct: false,
      },
    },
  },
  {
    id: 6,
    question:
      "SGM Bunda dengan Formulasi Tinggi Zat Besi, kandungan zat besi dalam 1 Gelas SGM Bunda setara dengan (…) Gelas Susu Sapi Segar",
    answer1: {
      a: {
        answer: "9 Gelas",
        correct: false,
      },
      b: {
        answer: "10 Gelas",
        correct: true,
      },
    },
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await User.findMany({
    where: {
      attend: 1,
    },
  });

  const prisma = new PrismaClient();

  let insert:any = [];

  const wait = user.map(async (item) => {
    let answer: string[] = [];
    quiz.map((item2) => {
      let benar = Math.random() <= 0.95 ? true : false;
      let correct = item2.answer1.a.correct
        ? item2.answer1.a.answer
        : item2.answer1.b.answer;
      let incorrect = item2.answer1.a.correct
        ? item2.answer1.b.answer
        : item2.answer1.a.answer;

      answer.push(benar ? correct : incorrect);
    });
    insert.push(
      prisma.answerNew.create({
        data: {
          id: item.id,
          name: item.name,
          email: item.email,
          kota: item.kota,
          whatsapp: item.whatsapp,
          institusi: item.institusi,
          nama_institusi: item.nama_institusi,
          attend: item.attend,
          e_nutri: item.e_nutri,
          jawaban_1: answer[0],
          jawaban_2: answer[1],
          jawaban_3: answer[2],
          jawaban_4: answer[3],
          jawaban_5: answer[4],
          jawaban_6: answer[5],
        },
      })
    );
  });

  await Promise.all(wait);

  prisma.$transaction(insert);

  res.status(200).json({ message: "success", userLength: user.length });
}
