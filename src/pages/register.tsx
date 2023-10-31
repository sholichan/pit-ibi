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
      <div className="absolute w-80 h-3/5 bg-white outline outline-1 outline-indigo-800 inset-1/2 -translate-x-1/2 -translate-y-1/4 rounded-2xl lg:w-11/12 p-2">
        <h1 className="font-medium rounded-lg text-center text-sm text-white lg:text-lg w-full h-fit bg-indigo-800 flex py-4 justify-center">Registration Booth Danone Indonesia</h1>
        <div className="flex flex-wrap content-start w-full h-2/3 overflow-auto bg-white outline outline-1 outline-indigo-800 rounded-lg lg:p-4">
          <div className="">
            <p className="text-gray-950 text-sm lg:text-base w-full h-fit p-4 mx-0.5 justify-center">
              Dengan mengikuti Acara dan/atau Program ilmiah sebagaimana disebutkan pada bagian awal, saya memberikan persetujuan kepada Danone SN Indonesia untuk memproses data pribadi saya dengan mengacu pada Kebijakan Kerahasiaan sesuai Pernyataan Privasi dan Syarat dan Ketentuan yang dapat diakses pada <span></span>
              <a className="inline-flex items-center text-blue-600 hover:underline" href={"/pdf/termsCons.pdf"} target="_blank"> Form Registrasi Danone SN Indonesia</a>, dan saya dapat menarik persetujuan saya kapan saja.
            </p>
          </div>
          <div className="flex w-full h-fit mx-4 items-center">
            <div className="flex justify-center items-center" onClick={() => { setAgree(true) }}>
              <input
                id="daftar"
                type="radio"
                name="daftar"
                className="w-4 h-4 checked:accent-indigo-800 ring-indigo-800"
              />
            </div>
            <h1 className=" text-gray-950  w-full p-1 mx-2 flex item-center">Ya</h1>
          </div>
        </div>
        <div className="w-full flex justify-center p-2">
          {isAgree ? (
            <Link className="bg-indigo-800 text-white font-medium w-6/12 h-12 p-2 rounded-md items-center flex justify-center" href="/form_register">
              <button >
                Lanjutkan
              </button>
            </Link>
          ) : (
            <Link className=" bg-indigo-800 text-white font-medium w-6/12 h-12 p-2 rounded-md items-center flex justify-center" href="">
              <button >
                Lanjutkan
              </button>
            </Link>
          )}
        </div>
      </div>
    </Layout>
  )
}