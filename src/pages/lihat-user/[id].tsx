import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function DetailUser() {
  const [quiz, setQuiz] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      console.log(router.query.id);
      fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/api/report/detailQuiz?id=${router.query.id}`
      )
        .then((res) => res.json())
        .then((data) => {
          let asu = data.data.map((quiz: any) => {
            let ret = {
              quiz: JSON.parse(quiz.pertanyaan),
              jawaban: quiz.jawaban,
              status: quiz.status,
            };
            return ret;
          });
          setQuiz(asu);
          console.log(asu);
        });
    }
  }, [router.query.id]);

  return (
    <div className="bg-white w-screen h-screen">
      {/* card quiz */}
      <div className="flex flex-wrap justify-center content-center">
        <div className="w-1/2 h-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10 border">
          {/* button back */}
          <button
            onClick={() => {
              router.push("/lihat-user");
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-3 rounded"
          >
            Back
          </button>
          {
            quiz.length < 1 ? <div className="text-gray-700 text-base font-bold">Belum ada jawaban</div> : ''
          }
          {quiz.map((item: any, key) => (
            <div key={key} className="mb-4 shadow-md rounded p-3 border">
              <div className="text-gray-700 text-base font-bold">
                {item.quiz.pertanyaan}
              </div>
              <div className="text-gray-700 text-base rounded-lg">
                {item.quiz.jawaban.map((jawab: any, index: any) => {
                  return (
                    <div key={index} className="flex mb-2" style={{alignItems : 'center'}}>
                      <div
                        className={` text-base rounded-lg w-1/6 p-2 border text-white ${
                          jawab.title == item.jawaban
                            ? "bg-blue-500 font-bold text-white"
                            : "text-gray-700"
                        }`}
                      >
                        {jawab.title}
                      </div>
                      {jawab.correct ? (
                        <svg
                          className="w-6 h-6 ml-2 text-green-400 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 21 21"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                          ></path>
                        </svg>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
