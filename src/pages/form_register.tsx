import { useEffect, useState } from "react";
import Layout from "../components/layout";
import { useFormik } from "formik";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cities } from "@/components/cities";

export default function FormRegister() {
  const [data, setData] = useState([]);
  const [isReadySubmit, setReadySubmit] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const result = await response.json();
        setData(result);
        console.log(result);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

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
      other: '',
      institution_name: ''
    },
    onSubmit: values => { alert(JSON.stringify(values, null, 2)) }
  })
  return (
    <Layout>
      <Header />
      <Footer/>
      <div className="fixed w-80 h-3/5 overflow-auto bg-white outline outline-1 outline-sky-500 top-60 left-7 rounded-2xl">
        <div className="flex flex-wrap justify-center items-center p-4 outline outline-1 outline-sky-500">
          <h1 className="font-medium text-center text-xs w-full h-fit bg-sky-500 flex p-2 justify-center">Isi data berikut dengan benar dan lengkap</h1>
          <form className=" text-gray-950 w-full h-fit outline outline-1 outline-sky-500 flex flex-wrap p-5 mx-0.5 mb-10 justify-start">
            <label className="p-1 font-bold text-sm my-2">Asal Kota/ Kabupaten :</label>
            <select id="cities" defaultValue="Pilih Kota" className="bg-none border border-sky-400 text-gray-900 text-sm rounded-lg border-transparent focus:outline-sky-500 block w-full p-2 mb-10">
              {cities.map((cities, i) => (

                <option className="mt-10" key={i} value={cities}>{cities}</option>
              ))}
            </select>

            <label className="p-1 font-bold text-sm my-2">Nama :</label>
            <input
              className="bg-none border border-sky-400 text-gray-900 text-sm rounded-lg border-transparent focus:outline-sky-500 block w-full p-2 mb-10"
              id="name"
              type="text"
              placeholder="Nama"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <label className="p-1 font-bold text-sm my-2">Nomer Whatsapp (WA) :</label>
            <input
              className="bg-none border border-sky-400 text-gray-900 text-sm rounded-lg border-transparent focus:outline-sky-500 block w-full p-2 mb-10"
              id="phone"
              type="text"
              placeholder="+62"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            <label className="p-1 font-bold text-sm my-2">Alamat E-Mail :</label>
            <input
              className="bg-none border border-sky-400 text-gray-900 text-sm rounded-lg border-transparent focus:outline-sky-500 block w-full p-2 mb-10"
              id="email"
              type="text"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label className="p-1 font-bold text-sm my-2">Institusi Tempat Bekerja :</label>
            <div className="bg-white p-4 flex flex-wrap items-center h-fit mb-4 rounded-lg">
              {
                institution.map((inst, i) => (
                  <div key={i} className="flex flex-wrap w-full items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-sky-600 bg-gray-100 border-sky-400 rounded checked:accent-sky-500 " />
                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900">{inst}</label>
                  </div>
                ))
              }
              <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-sky-600 bg-gray-100 border-sky-400 rounded checked:accent-sky-500" />
              <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900">Other</label>
              <input
                className="bg-transparent text-gray-900 text-sm w-3/5 mx-2 focus:outline-none border-b border-gray-900 "
                id="other"
                type="text"
                placeholder="click here"
                onChange={formik.handleChange}
                value={formik.values.other}
              />
            </div>
            <label className="p-1 font-bold text-sm my-2">Nama Institusi Tempat Bekerja :</label>
            <input
              className="bg-none border border-sky-400 text-gray-900 text-sm rounded-lg border-transparent focus:outline-sky-500 block w-full p-2 mb-10"
              id="institution_name"
              type="text"
              placeholder="Kab/Kota"
              onChange={formik.handleChange}
              value={formik.values.institution_name}
            />
            <div className="bg-white flex flex-wrap items-center h-fit p-5 mb-4 rounded-lg">
              <p className=" text-gray-950  text-sm w-full h-fit outline-sky-500 bg-white flex  mb-5 justify-center">
                Saya bersedia menerima segala informasi terkait kegiatan yang saya ikuti ini dan informasi terkait produk Nutrisi Nutricia Sarihusada melalui: Email, Whatsapp, Telpon.
              </p>
              <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-sky-600 bg-gray-100 border-sky-400 rounded checked:accent-sky-500" />
              <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900" onClick={() => { setReadySubmit(true) }}>Setuju</label>
            </div>
          </form>

          <Link className="bg-sky-500 w-6/12 h-12 p-2 rounded-md items-center flex justify-center" href="/questions">
            <button >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}