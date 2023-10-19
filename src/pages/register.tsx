import { useState } from "react";
import Layout from "../components/layout";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Register() {
  const [isAgree, setAgree] = useState(false)

  return (
    <Layout>
      <Header />
      <Footer />
      <div className="fixed w-80 h-3/5 bg-white outline outline-1 outline-indigo-800 top-60 left-7 rounded-2xl lg:w-11/12 p-2">
        <h1 className="font-medium rounded-lg text-center text-sm lg:text-lg w-full h-fit bg-indigo-800 flex py-4 justify-center">Registration Booth Danone Indonesia</h1>
        <div className="flex flex-wrap w-full h-2/3 overflow-auto bg-white outline outline-1 outline-indigo-800 rounded-lg lg:p-4 ">
          <p className="text-gray-950 text-sm lg:text-base w-full h-fit flex  p-4 mx-0.5 justify-center">
            Dengan mengikuti Acara dan/atau Program ilmiah sebagaimana disebutkan pada bagian awal, saya memberikan persetujuan kepada Danone SN Indonesia untuk memproses data pribadi saya dengan mengacu pada Kebijakan Kerahasiaan sesuai Pernyataan Privasi dan Syarat dan Ketentuan yang dapat diakses pada Form Registrasi Danone SN Indonesia, dan saya dapat menarik persetujuan saya kapan saja.
          </p>
          <div className="flex w-full h-fit mx-4 items-center">
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
        </div>
        <div className="w-full flex justify-center p-5">
          {isAgree ? (
            <Link className="bg-indigo-800 w-6/12 h-12 p-2 rounded-md items-center flex justify-center" href="/form_register">
              <button >
                Lanjutkan
              </button>
            </Link>
          ) : (
            <Link className=" bg-indigo-800 w-6/12 h-12 p-2 rounded-md items-center flex justify-center" href="">
              <button >
                Lanjutkan
              </button>
            </Link>
          )}
        </div>
      </div>
      {/* <div className="fixed w-80 h-3/5 overflow-auto bg-white outline outline-1 outline-sky-500 top-60 left-7 rounded-2xl pb-5">

        <div className="flex-wrap flex w-full h-full justify-center items-start p-5 lg:h-auto lg:p-2 lg:mt-10 ">
          <h1 className="font-medium text-sm w-full h-fit bg-sky-500 flex p-2 justify-center">Registration Booth Danone Indonesia</h1>
          <div className=" outline outline-1 outline-gray-400 bg-white px-5 mb-5">

            <p className="font-Bariol text-gray-950 text-justify text-sm w-full h-fit flex  py-5 mx-0.5 justify-center">
              Dengan mengikuti Acara dan/atau Program ilmiah sebagaimana disebutkan pada bagian awal, saya memberikan persetujuan kepada Danone SN Indonesia untuk memproses data pribadi saya dengan mengacu pada Kebijakan Kerahasiaan sesuai Pernyataan Privasi dan Syarat dan Ketentuan yang dapat diakses pada Form Registrasi Danone SN Indonesia, dan saya dapat menarik persetujuan saya kapan saja.
            </p>
            <div className="flex w-full my-2 justify-center">
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
          </div>
          {isAgree ? (

            <Link className="bg-sky-500 w-2/3 h-10 p-2 rounded-md items-center flex justify-center" href="/form_register">
              <button >
                Lanjutkan
              </button>
            </Link>
          ) : (
            <Link className=" bg-sky-500 w-2/3 h-10 p-2 rounded-md items-center flex justify-center" href="">
              <button >
                Lanjutkan
              </button>
            </Link>

          )}
          <div className="h-full"></div>
        </div>
      </div> */}
    </Layout>


  )
}