import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Layout from "../components/layout"
import HeaderHome from "@/components/header_home";
import Footer from "@/components/footer";


export default function HomePoster() {

  const [isClicked, setClicked] = useState<boolean>(true);
  const [isClicked1, setClicked1] = useState<boolean>(true);
  const [isClicked2, setClicked2] = useState<boolean>(true);
  const [isClicked3, setClicked3] = useState<boolean>(true);
  const [isClicked4, setClicked4] = useState<boolean>(true);
  return (
    <Layout>
      <HeaderHome />
      <Footer />
      <div className="flex flex-wrap space-y-7 lg:space-y-32 w-full justify-center content-center lg:content-between h-auto lg:h-4/6 my-5 z-50">
        <div className="flex flex-wrap h-fit lg:h-4/5 w-full justify-center content-center lg:content-start">
          <div className={isClicked ? " flex flex-wrap w-11/12 gap-6 h-fit lg:h-full lg:w-full justify-center mt-14 lg:m-20 lg:justify-between" : 'invisible'}>
            <video className={isClicked ? " border-indigo-800 border-2 w-2/5 lg:w-auto lg:h-full" : 'hidden'} autoPlay muted loop={true} onClick={() => { setClicked(false), setClicked1(false) }}>
              <source src="/video/CMPA1.mp4" type="video/mp4" />
            </video>
            <video className={isClicked ? " border-indigo-800 border-2 w-2/5 lg:w-auto lg:h-full" : 'hidden'} autoPlay muted loop={true} onClick={() => { setClicked(false), setClicked2(false) }}>
              <source src="/video/detailing_core_1.mp4" type="video/mp4" />
            </video>
            <video className={isClicked ? " border-indigo-800 border-2 w-2/5 lg:w-auto lg:h-full" : 'hidden'} autoPlay muted loop={true} onClick={() => { setClicked(false), setClicked3(false) }}>
              <source src="/video/detailing_core_3.mp4" type="video/mp4" />
            </video>
            <video className={isClicked ? " border-indigo-800 border-2 w-2/5 lg:w-auto lg:h-full" : 'hidden'} autoPlay muted loop={true} onClick={() => { setClicked(false), setClicked4(false) }}>
              <source src="/video/detailing_pbf_1.mp4" type="video/mp4" />
            </video>
          </div>

          <div className={isClicked ? 'invisible' : " flex flex-wrap h-full w-full justify-center content-start"}>

            <video className={isClicked1 ? "hidden" : 'border-indigo-800 border-4 p1 w-11/12 h-auto lg:h-auto lg:w-1/4'} autoPlay muted loop={true} width="400" height="200" onClick={() => { setClicked(true), setClicked1(true) }}>
              <source src="/video/CMPA2.mp4" type="video/mp4" />
            </video>
            <video className={isClicked2 ? "hidden" : 'border-indigo-800 border-4 p1 w-11/12 h-auto lg:h-auto lg:w-1/4'} autoPlay muted loop={true} width="400" height="200" onClick={() => { setClicked(true), setClicked2(true) }}>
              <source src="/video/detailing_core_2.mp4" type="video/mp4" />
            </video>
            <video className={isClicked3 ? "hidden" : 'border-indigo-800 border-4 p1 w-11/12 h-auto lg:h-auto lg:w-1/4'} autoPlay muted loop={true} width="400" height="200" onClick={() => { setClicked(true), setClicked3(true) }}>
              <source src="/video/detailing_core_3.mp4" type="video/mp4" />
            </video>
            <video className={isClicked4 ? "hidden" : 'border-indigo-800 border-4 p1 w-11/12 h-auto lg:h-auto lg:w-1/4'} autoPlay muted loop={true} width="400" height="200" onClick={() => { setClicked(true), setClicked4(true) }}>
              <source src="/video/detailing_pbf_2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <Link className={isClicked ? "bg-indigo-800 text-gray-200 border-gray-200 border-2 w-2/3 lg:w-1/4 lg:mt-32 h-10 p-2 rounded-lg items-center flex justify-center" : 'hidden'} href="/qrcode">
          <button >
            Quiz
          </button>
        </Link>

      </div>
    </Layout>

  );
}

