import Link from "next/link"
import Layout from "../components/layout"
import { useState } from "react"


type QuizItem = {
  id:number,
  question: string;
  answer1: {
    a: {
      answer: string;
      correct: boolean;
    };
    b: {
      answer: string;
      correct: boolean;
    };
  };
};

type Quiz = {
  [key: number]: QuizItem;
};
const quiz: Quiz = {
  1: {
    id:1,
    question: '1. SGM dengan (…) formulasi unik gabungan Zat Besi (Iron) dan Vitamin C yang dapat bantu meningkatkan penyerapan zat besi 2X Lipat.',
    answer1: {
      a: {
        answer: 'a.	IronC',
        correct: true
      },
      b: {
        answer: 'b.	Triple A',
        correct: false
      }
    },
  },
  2: {
    id:2,
    question: '2.	SGM dengan DHA dari Minyak Ikan (…) berkualitas, salah satu minyak ikan terbaik dengan Kandungan DHA 2x Lipat.',
    answer1: {
      a: {
        answer: 'a.	Tuna',
        correct: true
      },
      b: {
        answer: 'b.	Kod',
        correct: false
      }
    },
  },
  3: {
    id:3,
    question: '3.	(….) merupakan kombinasi unik dari AA, DHA, LA dari Bebelove untuk perkembangan otak',
    answer1: {
      a: {
        answer: 'b.	Triple Bifi',
        correct: false
      },
      b: {
        answer: 'b.	Triple A',
        correct: true
      }
    },
  },
}

export default function Question() {
  const [isAnswera, setAnswera] = useState(false)
  const [isAnswerb, setAnswerb] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isDone, setDone] = useState(false);
  const [bgAnswer, setBgAnswer] = useState('bg-indigo-800');
  const handleNextQuestion = () => {
    if (currentQuestion < Object.keys(quiz).length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswera(false)
      setAnswerb(false)
      setBgAnswer('bg-indigo-800')
    } else {
      setDone(true)
    }
  }
  const handleClicka = () => {
    setAnswera(quiz[currentQuestion].answer1.a.correct), 
    setAnswerb(quiz[currentQuestion].answer1.b.correct)
    if (quiz[currentQuestion].answer1.a.correct==isAnswera) {
      setBgAnswer('bg-red-800')
    } 
  }
  const handleClickb = () => {
    setAnswera(quiz[currentQuestion].answer1.a.correct), 
    setAnswerb(quiz[currentQuestion].answer1.b.correct)
    if (quiz[currentQuestion].answer1.b.correct==isAnswerb) {
      setBgAnswer('bg-red-800')
    } 
  }
  return (
    <Layout>
      <div className="bg-indigo-800 flex flex-wrap w-full p-2 justify-center items-center h-full">
        <h1 className="font-extrabold  text-gray-200 w-full text-xl text-center p-5 rounded-lg">{`PERTANYAAN ${currentQuestion}`}</h1>
        <div className="lg:w-1/3 w-72 h-auto flex flex-wrap justify-center text-indigo-800 text-center bg bg-white p-5 rounded-lg">
          <h1 className="font-extrabold text-base lg:text-xl mb-10">{quiz[currentQuestion].question}</h1>

          <h1 className={isAnswera ? `font-medium hover:cursor-pointer text-white bg-green-500 w-2/3 text-center p-5 mb-10 rounded-full` :
            `font-medium hover:cursor-pointer text-white ${bgAnswer} w-2/3 text-center p-5 mb-10 rounded-full`}
            onClick={handleClicka}>
            {quiz[currentQuestion].answer1.a.answer}
          </h1>

          <h1 className={isAnswerb ? `font-medium hover:cursor-pointer text-white bg-green-500 w-2/3 text-center p-5 mb-10 rounded-full` :
            `font-medium hover:cursor-pointer text-white ${bgAnswer} w-2/3 text-center p-5 mb-10 rounded-full`}
            onClick={handleClickb}>
            {quiz[currentQuestion].answer1.b.answer}
          </h1>

        </div>
        <div className="w-full h-fit flex justify-center font-bold text-gray-950">
          {isDone ? (
            <Link className="bg-gray-200 text-green-800 w-1/3 h-10 p-2 m-2 rounded-lg items-center flex justify-center" href="/home">
              <button >
                Home
              </button>
            </Link>
          ) : (
            <button className="bg-gray-200 w-1/3 h-10 p-2 m-2 rounded-lg items-center flex justify-center" onClick={handleNextQuestion}>
              Next
            </button>
          )}

        </div>
      </div>
    </Layout>
  )
}

