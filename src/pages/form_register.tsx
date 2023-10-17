import { useState } from "react";
import Layout from "../components/layout";
import { useFormik } from "formik";
import Link from "next/link";
import Header from "@/components/header";

export default function FormRegister() {
  const institution = [
    "Praktek Bidan Mandiri",
    'Rumah Sakit',
    'Puskesmas',
    'Dinas Kesehatan',
    'Lembaga Pendidikan Bidan'
  ]
  const formik = useFormik({
    initialValues: {
      city: '',
      name: '',
      phone: '',
      email: '',
      other: ''
    },
    onSubmit: values => { alert(JSON.stringify(values, null, 2)) }
  })
  return (
    <Layout>
      <Header/>
      <div className="flex flex-wrap w-full h-fit justify-center items-center p-2 mt-10">
        <h1 className="font-medium text-center text-xs w-full h-fit bg-blue-500 flex p-2 justify-center">Isi data berikut dengan benar dan lengkap</h1>
        <form className=" text-gray-950 w-full h-fit outline outline-1 outline-gray-400 flex flex-wrap p-5 mx-0.5 mb-10 justify-start">
          <label className="p-1">Asal Kota/ Kabupaten :</label>
          <input
            className="bg-none border border-gray-300 text-gray-900 text-sm rounded-lg border-transparent focus:outline-blue-500 block w-full p-2 mb-10"
            id="city"
            type="text"
            placeholder="Kab/Kota"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          <label className="p-1">Nama :</label>
          <input
            className="bg-none border border-gray-300 text-gray-900 text-sm rounded-lg border-transparent focus:outline-blue-500 block w-full p-2 mb-10"
            id="name"
            type="text"
            placeholder="Nama"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label className="p-1">Nomer Whatsapp (WA) :</label>
          <input
            className="bg-none border border-gray-300 text-gray-900 text-sm rounded-lg border-transparent focus:outline-blue-500 block w-full p-2 mb-10"
            id="phone"
            type="text"
            placeholder="+62"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          <label className="p-1">Alamat E-Mail :</label>
          <input
            className="bg-none border border-gray-300 text-gray-900 text-sm rounded-lg border-transparent focus:outline-blue-500 block w-full p-2 mb-10"
            id="email"
            type="text"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {
            institution.map((inst, i) => (
              <div key={i} className="flex flex-wrap w-full items-center mb-4">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded checked:accent-blue-500 " />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900">{inst}</label>
              </div>
            ))
          }
          <div className="flex items-center h-fit mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded checked:accent-blue-500" />
            <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900">Other</label>
            <input
              className="bg-transparent text-gray-900 text-sm w-full mx-2 focus:outline-none border-b border-gray-500 "
              id="other"
              type="text"
              placeholder="click here"
              onChange={formik.handleChange}
              value={formik.values.other}
            />
          </div>
        </form>

        <Link className="bg-blue-500 w-6/12 h-12 p-2 rounded-md items-center flex justify-center" href="/">
          <button >
            Submit
          </button>
        </Link>
      </div>
    </Layout>
  )
}