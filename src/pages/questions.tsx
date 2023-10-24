import Link from "next/link"
import Layout from "../components/layout"
import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import right from '../../public/icon/right.svg'
import checked from '../../public/icon/checked.svg'
import unchecked from '../../public/icon/unchecked.svg'



type QuizItem = {
  id: number,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
  const [showNext, setShowNext] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [isIcon, setIcon] = useState(true)

  const handleNextQuestion = () => {
    if (currentQuestion < Object.keys(quiz).length) {
      setShowNext(!showNext)
      setAnswera(false)
      setAnswerb(false)
      setCurrentQuestion(currentQuestion + 1);
      setBgAnswer('bg-indigo-800')
    } else {
      setIsOpen(true)
      setDone(true)
    }
  }
  const postAnswer = async (data: any) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/answer-quiz`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    const json = await res.json()
    console.log(json)
  }
  const handleClicka = (data: any) => {
    setShowNext(true)
    setIcon(data.pertanyaan.answer1.a.correct)
    const quiz = {
      "pertanyaan": data.pertanyaan.question,
      "jawaban": [
        {
          "title": data.pertanyaan.answer1.a.answer,
          "correct": data.pertanyaan.answer1.a.correct
        },
        {
          "title": data.pertanyaan.answer1.b.answer,
          "correct": data.pertanyaan.answer1.b.correct
        }
      ]
    }
    const postData = {
      "user_id": localStorage.getItem('antrian'),
      "pertanyaan": JSON.stringify(quiz),
      "jawaban": data.jawaban,
      "status": data.pertanyaan.answer1.a.correct ? 1 : 0,
      "quiz": data.pertanyaan.id,
    }
    setAnswera(data.pertanyaan.answer1.a.correct),
      setAnswerb(data.pertanyaan.answer1.b.correct)
    if (data.pertanyaan.answer1.a.correct == isAnswera) {
      setBgAnswer('bg-red-500')
    }
    postAnswer(postData)
  }
  const handleClickb = (data: any) => {
    setShowNext(true)
    setIcon(data.pertanyaan.answer1.b.correct)
    const quiz = {
      "pertanyaan": data.pertanyaan.question,
      "jawaban": [
        {
          "title": data.pertanyaan.answer1.a.answer,
          "correct": data.pertanyaan.answer1.a.correct
        },
        {
          "title": data.pertanyaan.answer1.b.answer,
          "correct": data.pertanyaan.answer1.b.correct
        }
      ]
    }
    const postData = {
      "user_id": localStorage.getItem('antrian'),
      "pertanyaan": JSON.stringify(quiz),
      "jawaban": data.jawaban,
      "status": data.pertanyaan.answer1.b.correct ? "1" : "0",
      "quiz": data.pertanyaan.id,
    }
    setAnswera(data.pertanyaan.answer1.a.correct),
      setAnswerb(data.pertanyaan.answer1.b.correct)
    if (data.pertanyaan.answer1.b.correct == isAnswera) {
      setBgAnswer('bg-red-500')
    }
    postAnswer(postData)
  }
  return (
    <Layout>
      {/* Modal Component */}
      <div className="fixed z-10 inset-0 overflow-y-auto" style={{ display: `${isOpen ? '' : 'none'}` }}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

          <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={() => {
            setIsOpen(false)
          }}>
            <div className="absolute inset-0 flex align-items-center" style={{ background: '#000000ba' }}>
              {/* Card Modal */}
              <div className="bg-white w-11/12 lg:w-1/2 m-auto rounded-lg shadow-lg overflow-hidden">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          selamat anda berhak atas 1 buah goodiebag persembahan Danone nutricia sarihusada. silahkan tunjukan ke panitia utk pengambilan gimmick.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <Link href="/" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-800 text-base font-medium text-white hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                    Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-800 flex flex-wrap space-y-5 w-full justify-center content-start h-full py-14 gap-0.5">
        <h1 className="font-extrabold  text-gray-200 w-full text-xl text-center rounded-lg">{`PERTANYAAN ${currentQuestion}`}</h1>
        <div className="lg:w-1/3 w-72 py-10 h-auto flex flex-wrap justify-center text-indigo-800 text-center bg bg-white p-5 rounded-lg">
          <h1 className="font-extrabold text-sm iphone12:text-lg lg:text-sm mb-10 lg:mb-5">{quiz[currentQuestion].question}</h1>

          <button disabled={showNext} className={isAnswera ? `font-medium hover:cursor-pointer text-white bg-green-500 w-2/3 text-center p-5 mb-10 lg:mb-5 rounded-full` :
            `font-medium hover:cursor-pointer text-white ${bgAnswer} w-2/3 text-center p-5 mb-10 lg:mb-5 rounded-full`}
            onClick={() => handleClicka({
              pertanyaan: quiz[currentQuestion],
              jawaban: quiz[currentQuestion].answer1.a.answer,
            })}>
            {quiz[currentQuestion].answer1.a.answer}
          </button>

          <button disabled={showNext} className={isAnswerb ? `font-medium hover:cursor-pointer text-white bg-green-500 w-2/3 text-center p-5 rounded-full` :
            `font-medium hover:cursor-pointer text-white ${bgAnswer} w-2/3 text-center p-5 rounded-full`}
            onClick={() => handleClickb({
              pertanyaan: quiz[currentQuestion],
              jawaban: quiz[currentQuestion].answer1.b.answer,
            })}>
            {quiz[currentQuestion].answer1.b.answer}
          </button>

        </div>
        <div className={showNext ? "w-full h-fit flex justify-center " : 'hidden'}>
          <Image className='w-10 h-10' src={isIcon ? checked : unchecked} alt={""} />
        </div>

        <div className="w-full h-fit flex justify-center font-bold text-gray-950">
          {isDone ? (
            <Link className="bg-white text-green-800 w-1/3 h-10 rounded-lg items-center flex justify-center" href="/">
              <button >
                Home
              </button>
            </Link>
          ) : (
            <button style={{ display: `${showNext ? '' : 'none'}` }} className="bg-white w-1/3 h-10 rounded-lg items-center flex justify-center" onClick={handleNextQuestion}>
              Next
            </button>
          )}

        </div>
      </div>
    </Layout>
  )
}

