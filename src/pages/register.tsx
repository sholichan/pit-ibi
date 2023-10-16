import { useState } from "react";
import Layout from "./layout";
import Link from "next/link";

export default function Register() {
  const [isTermCons, setTermCons] = useState(true)
  const [isAgree, setAgree] = useState(false)

  return (
    isTermCons ? (
      <Layout>
        <div className="flex flex-wrap w-full h-fit justify-center items-center p-2 mt-10">
          <h1 className="font-medium w-full h-fit bg-red-500 flex p-2 justify-center">Syarat dan Ketentuan</h1>
          <p className=" text-gray-950 w-full h-fit outline outline-1 outline-gray-400 flex px-10 py-5 mx-0.5 justify-center">
            Dengan mengikuti Acara dan/atau Program ilmiah sebagaimana disebutkan pada bagian awal, saya memberikan persetujuan kepada Danone SN Indonesia untuk memproses data pribadi saya dengan mengacu pada Kebijakan Kerahasiaan sesuai Pernyataan Privasi dan Syarat dan Ketentuan yang dapat diakses pada Form Registrasi Danone SN Indonesia, dan saya dapat menarik persetujuan saya kapan saja.
          </p>
          <div className="flex w-full p-2 justify-center">
            <div className="w-3 h-3 my-2 rounded-full hover:outline-2 outline outline-1 outline-gray-800 flex justify-center items-center"
            onClick={()=>{setAgree(true)}}>
              {isAgree?(

              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              ):(
                <div></div>
              )}
            </div>
            <h1 className="font-medium text-gray-950 text-xs w-full p-1 mx-2 flex item-center">Saya setuju dengan Syarat dan Ketentuan yang berlaku</h1>
          </div>
          <Link className="bg-red-500 w-5/12 h-12 p-2 rounded-md items-center flex justify-center" href="/">
            <button>
              Lanjutkan
            </button>
          </Link>
        </div>
      </Layout>
    ) : (
      <Layout>

      </Layout>
    )

  )
}