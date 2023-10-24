import Link from "next/link"
import { useState } from "react"

export default function HomePoster() {
  const [isClicked, setClicked] = useState<boolean>(true);
  const [isClicked1, setClicked1] = useState<boolean>(true);
  const [isClicked2, setClicked2] = useState<boolean>(true);
  const [isClicked3, setClicked3] = useState<boolean>(true);
  const [isClicked4, setClicked4] = useState<boolean>(true);

  return (
    <div style={{ backgroundColor: "#e5e7eb", minHeight: '100vh', }}>
      <div className="z-0 w-full rounded-b-3xl bg-indigo-800 px-2 py-10 justify-between">
        <div className="flex flex-wrap w-full font-medium text-center text-2xl text-gray-200 justify-center pb-5 lg:pb-10">
          <h1 className="w-full">
            SELAMAT DATANG
          </h1>
        </div>
      </div>
      <div style={{
        position: 'absolute',
        top: '30px',
        zIndex: "100",
      }} className={isClicked ? 'invisible' : " flex flex-wrap w-full justify-center content-start"}>
        <video className={isClicked1 ? "hidden" : 'border-indigo-800 border-4 p1 w-11/12 h-auto iphone12:w-full lg:h-auto lg:w-1/4'} autoPlay muted loop={true} width="400" height="200" onClick={() => { setClicked(true), setClicked1(true) }}>
          <source src="/video/CMPA1.mp4" type="video/mp4" />
        </video>
        <video className={isClicked2 ? "hidden" : 'border-indigo-800 border-4 p1 w-11/12 h-auto iphone12:w-full lg:h-auto lg:w-1/4'} autoPlay muted loop={true} width="400" height="200" onClick={() => { setClicked(true), setClicked2(true) }}>
          <source src="/video/detailing_core_1.mp4" type="video/mp4" />
        </video>
        <video className={isClicked3 ? "hidden" : 'border-indigo-800 border-4 p1 w-11/12 h-auto iphone12:w-full lg:h-auto lg:w-1/4'} autoPlay muted loop={true} width="400" height="200" onClick={() => { setClicked(true), setClicked3(true) }}>
          <source src="/video/detailing_core_1.mp4" type="video/mp4" />
        </video>
        <video className={isClicked4 ? "hidden" : 'border-indigo-800 border-4 p1 w-11/12 h-auto iphone12:w-full lg:h-auto lg:w-1/4'} autoPlay muted loop={true} width="400" height="200" onClick={() => { setClicked(true), setClicked4(true) }}>
          <source src="/video/detailing_pbf_1.mp4" type="video/mp4" />
        </video>
      </div>
      <div style={{
        zIndex: "100",
        position: 'relative',
        marginBottom: '30px'
      }} className="flex flex-wrap h-fit lg:h-4/5 w-full justify-center content-center lg:content-start">
        <div style={{ marginTop: '-30px' }} className={isClicked ? " flex mb-5 flex-wrap w-full iphone12:w-full gap-6 h-fit lg:h-full lg:w-full justify-center lg:m-5 lg:justify-between portrait" : 'invisible'}>
          <video className={isClicked ? " border-indigo-800 rounded shadow-lg border-2 w-2/5 lg:w-1/5 lg:h-full" : 'hidden'} autoPlay muted loop={true} onClick={() => { setClicked(false), setClicked1(false) }}>
            <source src="/video/CMPA1.mp4" type="video/mp4" />
          </video>
          <video className={isClicked ? " border-indigo-800 rounded shadow-lg border-2 w-2/5 lg:w-1/5 lg:h-full" : 'hidden'} autoPlay muted loop={true} onClick={() => { setClicked(false), setClicked2(false) }}>
            <source src="/video/detailing_core_1.mp4" type="video/mp4" />
          </video>
          <video className={isClicked ? " border-indigo-800 rounded shadow-lg border-2 w-2/5 lg:w-1/5 lg:h-full" : 'hidden'} autoPlay muted loop={true} onClick={() => { setClicked(false), setClicked3(false) }}>
            <source src="/video/detailing_core_3.mp4" type="video/mp4" />
          </video>
          <video className={isClicked ? " border-indigo-800 rounded shadow-lg border-2 w-2/5 lg:w-1/5 lg:h-full" : 'hidden'} autoPlay muted loop={true} onClick={() => { setClicked(false), setClicked4(false) }}>
            <source src="/video/detailing_pbf_1.mp4" type="video/mp4" />
          </video>
        </div>
        <Link className={isClicked ? "bg-indigo-800 text-gray-200 border-gray-200 border-2 w-2/3 lg:w-1/4 lg:mt-0 h-10 p-2 rounded-lg items-center flex justify-center" : 'hidden'} href="/qrcode">
          <button >
            Quiz
          </button>
        </Link>
      </div>
      <div className="fixed w-full h-12 bg-indigo-800 bottom-0 left-0 rounded-t-3xl"></div>
    </div>
  )
}

