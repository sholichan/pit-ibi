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
    question: 'SGM dengan (…) formulasi unik gabungan Zat Besi (Iron) dan Vitamin C yang dapat bantu meningkatkan penyerapan zat besi 2X Lipat.',
    answer1: {
      a: {
        answer: 'IronC',
        correct: true
      },
      b: {
        answer: 'Triple A',
        correct: false
      }
    },
  },
  2: {
    id:2,
    question: 'SGM dengan DHA dari Minyak Ikan (…) berkualitas, salah satu minyak ikan terbaik dengan Kandungan DHA 2x Lipat.',
    answer1: {
      a: {
        answer: 'Tuna',
        correct: true
      },
      b: {
        answer: 'Kod',
        correct: false
      }
    },
  },
  3: {
    id:3,
    question: '(….) merupakan kombinasi unik dari AA, DHA, LA dari Bebelove untuk perkembangan otak',
    answer1: {
      a: {
        answer: 'Triple Bifi',
        correct: false
      },
      b: {
        answer: 'Triple A',
        correct: true
      }
    },
  },
  4: {
    id:1,
    question: '(….) merupakan prebiotik yang paling banyak diteliti dan terbukti klinis memperbaiki frekuensi BAB, melunakkan konsistensi feses dan menaikkan jumlah bakteri baik.',
    answer1: {
      a: {
        answer: 'FOS:GOS',
        correct: true
      },
      b: {
        answer: 'L.Reuteri',
        correct: false
      }
    },
  },
  5: {
    id:2,
    question: 'Jika ASI tidak dapat diberikan karena indikasi medis, Formula isolat protein soya merupakan nutrisi alternatif untuk indikasi gejala alergi (…)',
    answer1: {
      a: {
        answer: 'Ringan-Sedang',
        correct: true
      },
      b: {
        answer: 'Berat',
        correct: false
      }
    },
  },
  6: {
    id:3,
    question: 'SGM Bunda dengan Formulasi Tinggi Zat Besi, kandungan zat besi dalam 1 Gelas SGM Bunda setara dengan (…) Gelas Susu Sapi Segar',
    answer1: {
      a: {
        answer: '9 Gelas',
        correct: false
      },
      b: {
        answer: '10 Gelas',
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
      
      <div className="bg-indigo-800 flex flex-wrap space-y-5 w-full justify-center content-start h-full py-14">
        <h1 className="font-extrabold  text-gray-200 w-full text-xl text-center rounded-lg">{`PERTANYAAN ${currentQuestion}`}</h1>
        <div className="lg:w-1/3 w-72 py-10 h-auto flex flex-wrap justify-center text-indigo-800 text-center bg bg-white p-5 rounded-lg">
          <h1 className="font-extrabold text-base lg:text-base mb-10">{quiz[currentQuestion].question}</h1>

          <h1 className={isAnswera ? `font-medium hover:cursor-pointer text-white bg-green-500 w-2/3 text-center p-5 mb-10 rounded-full` :
            `font-medium hover:cursor-pointer text-white ${bgAnswer} w-2/3 text-center p-5 mb-10 rounded-full`}
            onClick={handleClicka}>
            {quiz[currentQuestion].answer1.a.answer}
          </h1>

          <h1 className={isAnswerb ? `font-medium hover:cursor-pointer text-white bg-green-500 w-2/3 text-center p-5 rounded-full` :
            `font-medium hover:cursor-pointer text-white ${bgAnswer} w-2/3 text-center p-5 rounded-full`}
            onClick={handleClickb}>
            {quiz[currentQuestion].answer1.b.answer}
          </h1>

        </div>
        <div className="w-full h-fit flex justify-center font-bold text-gray-950">
          {isDone ? (
            <Link className="bg-white text-green-800 w-1/3 h-10 p-2 m-2 rounded-lg items-center flex justify-center" href="/home">
              <button >
                Home
              </button>
            </Link>
          ) : (
            <button className="bg-white w-1/3 h-10 p-2 m-2 rounded-lg items-center flex justify-center" onClick={handleNextQuestion}>
              Next
            </button>
          )}

        </div>
      </div>
    </Layout>
  )
}

