import { useEffect, useState } from "react";
import Layout from "../components/layout";
import { useFormik } from "formik";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import getUser from '../pages/api/getuser';
import { cities } from "@/components/cities";

export default function FormRegister() {
  const [data, setData] = useState([getUser]);
  const [isReadySubmit, setReadySubmit] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/getuser?kota=Sumenep&name=Kusmawati');
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
      <Footer />
      <div className="fixed w-80 h-3/5 bg-white outline outline-1 outline-indigo-800 top-60 left-7 rounded-2xl lg:w-11/12 p-2">
        <h1 className="font-medium rounded-lg text-center text-sm lg:text-lg w-full h-fit bg-indigo-800 flex py-4 justify-center">Isi data berikut dengan benar dan lengkap</h1>
        <div className="flex w-full h-2/3 overflow-auto bg-white outline outline-1 outline-indigo-800 rounded-lg lg:p-4 ">
          <div className="flex flex-wrap justify-center items-center outline">
            <form className=" text-gray-950 w-full h-fit flex flex-wrap p-5 mx-0.5 mb-5 justify-start">
              <label className="p-1 w-full font-bold text-sm my-2 flex lg:justify-center">Asal Kota/ Kabupaten :</label>
              <select id="cities" defaultValue="Pilih Kota" className="bg-none border border-indigo-800 text-gray-900 text-sm rounded-lg focus:outline-indigo-800 block w-full p-2 mb-5 lg:mx-60 lg:text-center lg:mb-5">
                {cities.map((cities, i) => (
                  <option className="mt-10" key={i} value={cities}>{cities}</option>
                ))}
              </select>

              <label className="p-1 w-full font-bold text-sm my-2 flex lg:justify-center">Nama :</label>
              <input
                className="bg-none border border-indigo-800 text-gray-900 text-sm rounded-lg focus:outline-indigo-800 block w-full p-2 mb-5 lg:mx-60 lg:placeholder:text-center lg:mb-5"
                id="name"
                type="text"
                placeholder="Nama"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <label className="p-1 w-full font-bold text-sm my-2 flex lg:justify-center">Nomer Whatsapp (WA) :</label>
              <input
                className="bg-none border border-indigo-800 text-gray-900 text-sm rounded-lg focus:outline-indigo-800 block w-full p-2 mb-5 lg:mx-60 lg:placeholder:text-center lg:mb-5"
                id="phone"
                type="text"
                placeholder="+62"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              <label className="p-1 w-full font-bold text-sm my-2 flex lg:justify-center">Alamat E-Mail :</label>
              <input
                className="bg-none border border-indigo-800 text-gray-900 text-sm rounded-lg focus:outline-indigo-800 block w-full p-2 mb-5 lg:mx-60 lg:placeholder:text-center lg:mb-5"
                id="email"
                type="text"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <label className="p-1 w-full font-bold text-sm my-2 flex lg:justify-center">Institusi Tempat Bekerja :</label>
              <div className="bg-white flex flex-wrap w-fit h-fit mb-4 rounded-lg border border-indigo-800 lg:mx-60 p-5">
                {
                  institution.map((inst, i) => (
                    <div key={i} className="flex flex-wrap w-full items-center mb-4 ">
                      <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 checked:accent-indigo-800 ring-indigo-800" />
                      <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900">{inst}</label>
                    </div>
                  ))
                }
                <input id="default-checkbox" type="checkbox" value="" className=" w-4 h-4 checked:accent-indigo-800" />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900">Other</label>
                <input
                  className="bg-transparent text-gray-900 text-sm w-3/5 lg:w-2/4 mx-2 focus:outline-none border-b border-gray-900 "
                  id="other"
                  type="text"
                  placeholder="click here"
                  onChange={formik.handleChange}
                  value={formik.values.other}
                />
              </div>
              <label className="p-1 w-full font-bold text-sm my-2 flex lg:justify-center">Nama Institusi Tempat Bekerja :</label>
              <input
                className="bg-none border border-indigo-800 text-gray-900 text-sm rounded-lg focus:outline-indigo-800 block w-full p-2 mb-5 lg:mx-60 lg:placeholder:text-center lg:mb-5"
                id="institution_name"
                type="text"
                placeholder="Kab/Kota"
                onChange={formik.handleChange}
                value={formik.values.institution_name}
              />
              <div className="bg-white flex flex-wrap items-center h-fit p-5 mb-4 rounded-lg">
                <p className=" text-gray-950  text-sm w-full h-fit outline-indigo-800 bg-white flex  mb-5 justify-center">
                  Saya bersedia menerima segala informasi terkait kegiatan yang saya ikuti ini dan informasi terkait produk Nutrisi Nutricia Sarihusada melalui: Email, Whatsapp, Telpon.
                </p>
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-indigo-800 bg-gray-100 border-indigo-800 rounded checked:accent-indigo-800" />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900" onClick={() => { setReadySubmit(true) }}>Setuju</label>
              </div>
            </form>

          </div>
        </div>
        <div className="w-full flex justify-center p-5">
          <Link className="bg-indigo-800 w-6/12 h-12 p-2 rounded-md items-center flex justify-center" href="/questions">
            <button >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}