import Link from "next/link"
import Layout from "../components/layout"
import { useState } from "react"


type QuizItem = {
  question: string;
  answer1: {
    a: {
      answer: string;
      status: boolean;
    };
    b: {
      answer: string;
      status: boolean;
    };
  };
};

type Quiz = {
  [key: number]: QuizItem;
};
const quiz:Quiz = {
  1: {
    question: '1. SGM dengan (…) formulasi unik gabungan Zat Besi (Iron) dan Vitamin C yang dapat bantu meningkatkan penyerapan zat besi 2X Lipat.',
    answer1: {
      a: {
        answer: 'a.	IronC',
        status: true
      },
      b: {
        answer: 'b.	Triple A',
        status: false
      }
    },
  },
  2: {
    question: '2.	SGM dengan DHA dari Minyak Ikan (…) berkualitas, salah satu minyak ikan terbaik dengan Kandungan DHA 2x Lipat.',
    answer1: {
      a: {
        answer: 'a.	Tuna',
        status: true
      },
      b: {
        answer: 'b.	Kod',
        status: false
      }
    },
  },
  3: {
    question: '3.	(….) merupakan kombinasi unik dari AA, DHA, LA dari Bebelove untuk perkembangan otak',
    answer1: {
      a: {
        answer: 'b.	Triple Bifi',
        status: false
      },
      b: {
        answer: 'b.	Triple A',
        status: true
      }
    },
  },
}

export default function Question() {
  const [isAnswera, setAnswera] = useState(false)
  const [isAnswerb, setAnswerb] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const handleNextQuestion = () => {
    if (currentQuestion < Object.keys(quiz).length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswera(false)
      setAnswerb(false)
    }
    // setAnswera(false)
    // setAnswerb(false)
  }
  return (
    <Layout>
      <div className="flex flex-wrap w-auto lg:w-80 p-2 justify-center items-center h-fit my-5 ">
        <h1 className="font-extrabold  text-white text-xl bg-sky-500 w-full text-center p-5 mb-10 rounded-lg">PERTANYAAN 1</h1>
        <div className="flex flex-wrap justify-center text-sky-600 text-center bg bg-white p-5 mb-10 rounded-lg">
          <h1 className="font-bold text-lg mb-10">{quiz[currentQuestion].question}</h1>
          <h1 className={isAnswera ? "font-medium  text-white bg-green-500 w-2/3 text-center p-5 mb-10 rounded-lg" :
            "font-medium  text-white bg-sky-500 w-2/3 text-center p-5 mb-10 rounded-lg"}
            onClick={() => (setAnswera(quiz[currentQuestion].answer1.a.status), setAnswerb(quiz[currentQuestion].answer1.b.status))}>
            {quiz[currentQuestion].answer1.a.answer}</h1>
          <h1 className={isAnswerb ? "font-medium  text-white bg-green-500 w-2/3 text-center p-5 mb-10 rounded-lg" :
            "font-medium  text-white bg-sky-500 w-2/3 text-center p-5 mb-10 rounded-lg"}
            onClick={() => (setAnswera(quiz[currentQuestion].answer1.a.status), setAnswerb(quiz[currentQuestion].answer1.b.status))}>
            {quiz[currentQuestion].answer1.b.answer}</h1>
        </div>

        <button className="bg-sky-500 w-2/3 h-10 p-2 m-2 rounded-lg items-center flex justify-center" onClick={handleNextQuestion}>
          Next
        </button>
      </div>
    </Layout>
  )
}

