import { useState } from "react";
import Layout from "../components/layout";
import Link from "next/link";
import Header from "@/components/header";

export default function Register() {
  const [isAgree, setAgree] = useState(false)

  return (
    <Layout>
      <Header/>
      <div className="flex-wrap flex w-full h-full justify-center items-start p-5 lg:h-auto lg:p-2 lg:mt-10">
        <h1 className="font-medium text-sm w-full h-fit bg-blue-500 flex p-2 justify-center">Registration Booth Danone Indonesia</h1>
        <p className=" text-gray-950 text-justify text-sm w-full h-fit outline outline-1 outline-gray-400 bg-white flex px-10 py-5 mx-0.5 justify-center">
          Dengan mengikuti Acara dan/atau Program ilmiah sebagaimana disebutkan pada bagian awal, saya memberikan persetujuan kepada Danone SN Indonesia untuk memproses data pribadi saya dengan mengacu pada Kebijakan Kerahasiaan sesuai Pernyataan Privasi dan Syarat dan Ketentuan yang dapat diakses pada Form Registrasi Danone SN Indonesia, dan saya dapat menarik persetujuan saya kapan saja.
        </p>
        <div className="flex w-full p-2 justify-center">
          <div className="flex justify-center items-center" onClick={() => { setAgree(true) }}>
            {isAgree ? (
              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="#080341" />
                <circle cx="12" cy="12" r="5.25" fill="#080341" />
              </svg>
            ) : (
              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="#080341" />
              </svg>
            )}
          </div>
          <h1 className=" text-gray-950  w-full p-1 mx-2 flex item-center">Ya</h1>
        </div>
        {isAgree ? (

          <Link className="bg-blue-500 w-6/12 h-12 p-2 rounded-md items-center flex justify-center" href="/form_register">
            <button >
              Lanjutkan
            </button>
          </Link>
        ) : (
          <Link className="bg-blue-500 w-6/12 h-12 p-2 rounded-md items-center flex justify-center" href="">
            <button >
              Lanjutkan
            </button>
          </Link>

        )}
        <div className="h-full"></div>
      </div>
    </Layout>


  )
}