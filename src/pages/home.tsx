import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Layout from "../components/layout"


export default function HomePoster() {

  const [isClicked, setClicked] = useState<boolean>(true);
  const [isClicked1, setClicked1] = useState<boolean>(true);
  const [isClicked2, setClicked2] = useState<boolean>(true);
  const [isClicked3, setClicked3] = useState<boolean>(true);
  const [isClicked4, setClicked4] = useState<boolean>(true);
  return (
    <Layout>

      <div className="flex flex-wrap w-screen p-4 justify-center h-auto my-5">
        <div className="flex flex-wrap h-4/5 w-full justify-center">
          <video className={isClicked ? "p-1" : 'hidden'} autoPlay muted loop={true} width="150" height="200" onClick={() => { setClicked(false), setClicked1(false) }}>
            <source src="/video/CMPA1.mp4" type="video/mp4" />
          </video>
          <video className={isClicked ? "p-1" : 'hidden'} autoPlay muted loop={true} width="150" height="200" onClick={() => { setClicked(false), setClicked2(false) }}>
            <source src="/video/detailing_core_1.mp4" type="video/mp4" />
          </video>
          <video className={isClicked ? "p-1" : 'hidden'} autoPlay muted loop={true} width="150" height="200" onClick={() => { setClicked(false), setClicked3(false) }}>
            <source src="/video/detailing_core_3.mp4" type="video/mp4" />
          </video>
          <video className={isClicked ? "p-1" : 'hidden'} autoPlay muted loop={true} width="150" height="200" onClick={() => { setClicked(false), setClicked4(false) }}>
            <source src="/video/detailing_pbf_1.mp4" type="video/mp4" />
          </video>

          <video className={isClicked1 ? "hidden" : 'p1'} autoPlay muted loop={true} width="400" height="200" onClick={() => { setClicked(true), setClicked1(true) }}>
            <source src="/video/CMPA2.mp4" type="video/mp4" />
          </video>
          <video className={isClicked2 ? "hidden" : 'p1'} autoPlay muted loop={true} width="400" height="200" onClick={() => { setClicked(true), setClicked2(true) }}>
            <source src="/video/detailing_core_2.mp4" type="video/mp4" />
          </video>
          <video className={isClicked3 ? "hidden" : 'p1'} autoPlay muted loop={true} width="400" height="200" onClick={() => { setClicked(true), setClicked3(true) }}>
            <source src="/video/detailing_core_3.mp4" type="video/mp4" />
          </video>
          <video className={isClicked4 ? "hidden" : 'p1'} autoPlay muted loop={true} width="400" height="200" onClick={() => { setClicked(true), setClicked4(true) }}>
            <source src="/video/detailing_pbf_2.mp4" type="video/mp4" />
          </video>
        </div>

        <Link className={isClicked ? "bg-sky-500 w-2/3 h-10 p-2 mt-14 rounded-lg items-center flex justify-center" : 'hidden'} href="/quiz">
          <button >
            Quiz
          </button>
        </Link>
      </div>
    </Layout>

  );
}

