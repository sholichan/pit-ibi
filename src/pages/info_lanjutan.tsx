import Link from "next/link"
import Layout from "../components/layout"
import Image, { StaticImageData } from "next/image"
import { useState } from "react"
import alergi1 from '../../public/img/alergi1.jpg'
import alergi2 from '../../public/img/alergi2.jpg'
import anemia1 from '../../public/img/anemia1.jpg'
import anemia2 from '../../public/img/anemia2.jpg'
import anemia3 from '../../public/img/anemia3.jpg'
import kehamilan1 from '../../public/img/kehamilan1.jpg'
import kehamilan2 from '../../public/img/kehamilan2.jpg'
import pencernaan1 from '../../public/img/pencernaan1.png'
import pencernaan2 from '../../public/img/pencernaan2.png'
import pencernaan3 from '../../public/img/pencernaan3.png'

export default function Info_Lanjutan() {
  const [isOpen, setOpen] = useState(false)
  const [isSrc, setSrc] = useState<StaticImageData[]>([])
  const [indexArr, setIndexArr] = useState(0)
  const [isAnimated, setAnimated] = useState('animate-fade-up')

  const alergi = [alergi1, alergi2]
  const anemia = [anemia1, anemia2, anemia3]
  const kehamilan = [kehamilan1, kehamilan2]
  const pencernaan = [pencernaan1, pencernaan2, pencernaan3]

  const handleNext = () => {
    if (indexArr < isSrc.length - 1) {
      setIndexArr(indexArr + 1)
    } else {
      setOpen(false)
      setIndexArr(0)
      setAnimated('animate-fade-right')
    }
  }
  const handleClick1 = () => {
    setSrc(pencernaan)
    setOpen(true)
  }
  const handleClick2 = () => {
    setSrc(alergi)
    setOpen(true)
  }
  const handleClick3 = () => {
    setSrc(anemia)
    setOpen(true)
  }
  const handleClick4 = () => {
    setSrc(kehamilan)
    setOpen(true)
  }
  return (

    <Layout>
      <div className={`fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-40 `}  style={{ display: `${isOpen ? '' : 'none'}` }} onClick={handleNext}>
        <div className="flex w-full h-full  justify-center items-center p-4 focus:animate-fade-right">
          <Image src={isSrc[indexArr]} alt="" className="lg:w-1/4" />
        </div>
      </div>
      <div className="bg-indigo-800 flex flex-wrap w-full p-2 justify-center content-start h-full py-14">
        <div className="w-auto h-5/6 flex flex-wrap p-2 justify-center content-start gap-14">

          <h1 className="font-bold text-gray-200 text-center w-full flex justify-center text- center text-xl px-16">
            Ibu bidan, mau informasi lanjutan mengenai:
          </h1>

          <div className="w-full justify-center flex flex-wrap h-fit p-2 rounded-lg gap-4">
            <div className="hover:cursor-pointer bg-gray-200 font-medium text-gray-950 w-2/5 h-28 p-2 rounded-lg items-center flex justify-center" onClick={handleClick1}>
              <h1 className="font-bold text-center w-full flex justify-center text- center text-lg lg:text-xl">
                KESEHATAN SALURAN CERNA
              </h1>
            </div>
            <div className="hover:cursor-pointer bg-gray-200 font-medium text-gray-950 w-2/5 h-28 p-2 rounded-lg items-center flex justify-center" onClick={handleClick2}>
              <h1 className="font-bold text-center w-full flex justify-center text- center text-xl">
                ALERGI SUSU SAPI
              </h1>
            </div>
            <div className="hover:cursor-pointer bg-gray-200 font-medium text-gray-950 w-2/5 h-28 p-2 rounded-lg items-center flex justify-center" onClick={handleClick3}>
              <h1 className="font-bold text-center w-full flex justify-center text- center text-xl">
                ANEMIA
              </h1>
            </div>
            <div className="hover:cursor-pointer bg-gray-200 font-medium text-gray-950 w-2/5 h-28 p-2 rounded-lg items-center flex justify-center" onClick={handleClick4}>
              <h1 className="font-bold text-center w-full flex justify-center text- center text-xl">
                KEHAMILAN
              </h1>
            </div>
          </div>

          <div className="w-72 h-fit flex justify-center">
            <Link className="bg-gray-200 font-medium text-gray-950 w-2/4 h-10 p-2 mr-1 rounded-lg items-center flex justify-center"
              href="/">
              <button >
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

