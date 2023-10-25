import Link from "next/link"
import Layout from "../components/layout"
import Image, { StaticImageData } from "next/image"
import { useState } from "react"
import alergi from '../../public/img/alergi2.jpg'
import anemia from '../../public/img/anemia3.jpg'
import kehamilan from '../../public/img/kehamilan1.jpg'
import pencernaan from '../../public/img/pencernaan3.jpg'
import Footer from "@/components/footer"
import Header_home from "@/components/header_home"

export default function Info_Lanjutan() {
  const [isOpen, setOpen] = useState(false)
  const [isSrc, setSrc] = useState<StaticImageData>(alergi)


  const handleClose = () => {
    setOpen(false)
  }
  const handleClick1 = () => {
    setSrc(kehamilan)
    setOpen(true)
  }
  const handleClick2 = () => {
    setSrc(anemia)
    setOpen(true)
  }
  const handleClick3 = () => {
    setSrc(pencernaan)
    setOpen(true)
  }
  const handleClick4 = () => {
    setSrc(alergi)
    setOpen(true)
  }
  return (

    <Layout>
      <Header_home />
      <Footer />
      <div className={`fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-40 `} style={{ display: `${isOpen ? '' : 'none'}` }} onClick={handleClose}>
        <div className="flex w-full h-full justify-center items-center p-4">
          <Image src={isSrc} alt="" className="lg:w-1/4" />
        </div>
      </div>
      <div className="absolute inset-0 top-20">
        <div className="flex flex-wrap w-full p-2 justify-center content-start h-full ">
          <div className="w-auto h-fit flex flex-wrap p-2 justify-center content-start iphone12:gap-8 gap-5">
            <div className="w-full justify-center lg:justify-between flex flex-wrap h-fit p-2 lg:px-12 rounded-lg iphone12:gap-8 gap-5">
              <div className="hover:cursor-pointer hover:animate-shake border-indigo-800 border-4 font-medium text-gray-950 lg:w-2/12 w-2/5 h-auto rounded-lg items-center flex justify-center" onClick={handleClick1}>
                <div className="flex w-full h-full  justify-center items-center">
                  <Image src={kehamilan} alt="" />
                </div>
              </div>
              <div className="hover:cursor-pointer hover:animate-shake border-indigo-800 border-4 font-medium text-gray-950 lg:w-2/12 w-2/5 h-auto rounded-lg items-center flex justify-center" onClick={handleClick2}>
                <div className="flex w-full h-full  justify-center items-center">
                  <Image src={anemia} alt="" />
                </div>
              </div>
              <div className="hover:cursor-pointer hover:animate-shake border-indigo-800 border-4 font-medium text-gray-950 lg:w-2/12 w-2/5 h-auto rounded-lg items-center flex justify-center" onClick={handleClick3}>
                <div className="flex w-full h-full  justify-center items-center">
                  <Image src={pencernaan} alt="" />
                </div>
              </div>
              <div className="hover:cursor-pointer hover:animate-shake border-indigo-800 border-4 font-medium text-gray-950 lg:w-2/12 w-2/5 h-auto rounded-lg items-center flex justify-center" onClick={handleClick4}>
                <div className="flex w-full h-full  justify-center items-center">
                  <Image src={alergi} alt="" />
                </div>
              </div>
            </div>

            <Link className="bg-indigo-800 text-gray-200 border-gray-200 border-2 w-2/3 lg:w-1/4 lg:mt-0 h-10 p-2 rounded-lg items-center flex justify-center" href="/qrcode">
              <button >
                Quiz
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

