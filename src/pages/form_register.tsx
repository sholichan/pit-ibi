import { useEffect, useState } from "react";
import Layout from "../components/layout";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cities } from "@/components/cities";

export default function FormRegister() {
  const [sugesData, setSugesData] = useState([]);
  const [isReadySubmit, setReadySubmit] = useState(false)
  const [selectedName, setSelectedName] = useState('')

  async function fetchData(data: any) {
    try {
      console.log(data);
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/getuser?kota=${data.kota}&name=${data.name}`);
      const result = await response.json();
      setSugesData(result);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const institution = [
    "Praktek Bidan Mandiri",
    'Rumah Sakit',
    'Puskesmas',
    'Dinas Kesehatan',
    'Lembaga Pendidikan Bidan'
  ]

  const validationSchema = Yup.object({
    kota: Yup.string().required('Kota harus diisi'),
    name: Yup.string().required('Nama harus diisi'),
    whatsapp: Yup.string().required('Whatsapp harus diisi'),
    email: Yup.string().required('Email harus diisi'),
    institusi: Yup.string().required('Institusi harus diisi'),
    nama_institusi: Yup.string().required('Nama Institusi harus diisi'),
  })

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      kota: '',
      name: '',
      whatsapp: '',
      email: '',
      institusi: '',
      nama_institusi: '',
    },
    onSubmit: values => {
      if(!isReadySubmit) return alert('Anda harus menyetujui persyaratan')
      fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.status === '200') {
            alert('Terima kasih telah mendaftar, silahkan lanjut ke halaman kuis');
            window.location.href = '/questions';
          } else {
            alert('Terjadi kesalahan, silahkan coba lagi');
          }
        })
        .catch((err) => {
          console.log('Error: ', err);
          alert('Terjadi kesalahan, silahkan coba lagi');
        });
    }
  })
  useEffect(() => {
    if (formik.values.name === "") {
      return setSugesData([])
    }
    if (selectedName === formik.values.name) {
      return
    }
    const delayInputTimeoutId = setTimeout(() => {
      fetchData({ kota: formik.values.kota, name: formik.values.name })
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [formik.values.name, 500])
  return (
    <Layout>
      <Header />
      <Footer />
      <div className="fixed w-80 h-3/5 bg-white outline outline-1 outline-indigo-800 inset-1/2 -translate-x-1/2 -translate-y-1/4 rounded-2xl lg:w-11/12 p-2">
        <h1 className="font-medium rounded-lg text-white text-center text-sm lg:text-lg w-full h-fit bg-indigo-800 flex py-4 justify-center">Isi data berikut dengan benar dan lengkap</h1>
        <div className="flex w-full h-2/3 height-content justify-center bg-white outline outline-1 outline-indigo-800 rounded-lg lg:p-4 ">
          <div className="flex flex-wrap justify-center items-center overflow-auto lg:w-2/3">
            <form onSubmit={formik.handleSubmit} className=" text-gray-950 w-auto h-fit flex flex-wrap p-5 lg:p-0 mx-0.5 mb-5 justify-start">
              <label className="p-1 w-full font-bold text-sm my-2 flex lg:justify-center">Asal Kota/ Kabupaten :</label>
              <select id="cities" defaultValue="Pilih Kota" onChange={formik.handleChange} name="kota" className="bg-none border border-indigo-800 text-gray-900 text-sm rounded-lg focus:outline-indigo-800 block w-full p-2 mb-5 lg:mx-5 lg:text-center lg:mb-5">
                {cities.map((cities, i) => (
                  <option className="mt-10" key={i} value={cities}>{cities}</option>
                ))}
              </select>
              <label className="p-1 w-full font-bold text-sm my-2 flex lg:justify-center">Nama :</label>
              <input
                className="bg-none border border-indigo-800 text-gray-900 text-sm rounded-lg focus:outline-indigo-800 block w-full p-2 mb-5 lg:mx-5 lg:placeholder:text-center lg:mb-5"
                id="name"
                type="text"
                placeholder="Nama"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <div id="suges" className="px-4">
                <ul>
                  {
                    sugesData.map((data: any, i) => (
                      <li key={i} onClick={() => {
                        formik.setFieldValue('name', data.name)
                        formik.setFieldValue('whatsapp', data.whatsapp)
                        formik.setFieldValue('email', data.email)
                        formik.setFieldValue('institusi', data.institusi)
                        formik.setFieldValue('nama_institusi', data.nama_institusi)
                        setSugesData([])
                        setSelectedName(data.name)
                      }}>{data.name}</li>
                    ))
                  }
                </ul>
              </div>
              <label className="p-1 w-full font-bold text-sm my-2 flex lg:justify-center">Nomer Whatsapp (WA) :</label>
              <input
                className="bg-none border border-indigo-800 text-gray-900 text-sm rounded-lg focus:outline-indigo-800 block w-full p-2 mb-5 lg:mx-5 lg:placeholder:text-center lg:mb-5"
                id="whatsapp"
                name="whatsapp"
                type="text"
                placeholder="+62"
                onChange={formik.handleChange}
                value={formik.values.whatsapp}
              />
              <label className="p-1 w-full font-bold text-sm my-2 flex lg:justify-center">Alamat E-Mail :</label>
              <input
                className="bg-none border border-indigo-800 text-gray-900 text-sm rounded-lg focus:outline-indigo-800 block w-full p-2 mb-5 lg:mx-5 lg:placeholder:text-center lg:mb-5"
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <label className="p-1 w-full font-bold text-sm my-2 flex lg:justify-center">Institusi Tempat Bekerja :</label>
              <div className="bg-white flex flex-wrap w-full h-fit mb-4 rounded-lg border border-indigo-800 lg:mx-5 p-5">
                {
                  institution.map((inst, i) => (
                    <div key={i} className="flex flex-wrap w-full items-center mb-4 ">
                      <input
                        id={`instansi-${inst}`}
                        checked={inst === formik.values.institusi}
                        type="radio"
                        name="institusi"
                        onChange={formik.handleChange}
                        value={inst}
                        className="w-4 h-4 checked:accent-indigo-800 ring-indigo-800"
                      />
                      <label htmlFor={`instansi-${inst}`} className="ml-2 text-sm font-medium text-gray-900">{inst}</label>
                    </div>
                  ))
                }
                <input
                  id="default-checkbox"
                  type="radio"
                  checked={institution.every((inst) => {
                    return inst !== formik.values.institusi
                  })}
                  name="institusi"
                  value=""
                  onChange={formik.handleChange}
                  className="w-4 h-4 checked:accent-indigo-800" />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900">Other</label>
                <input
                  className="bg-transparent text-gray-900 text-sm w-3/5 lg:w-2/4 mx-2 focus:outline-none border-b border-gray-900 "
                  id="other"
                  type="text"
                  name="institusi"
                  placeholder="ketik jenis institusi anda"
                  onChange={formik.handleChange}
                  value={
                    institution.every((inst) => {
                      return inst !== formik.values.institusi
                    }) ? formik.values.institusi : ''
                  }
                />
              </div>
              <label className="p-1 w-full font-bold text-sm my-2 flex lg:justify-center">Nama Institusi Tempat Bekerja :</label>
              <input
                className="bg-none border border-indigo-800 text-gray-900 text-sm rounded-lg focus:outline-indigo-800 block w-full p-2 mb-5 lg:mx-5 lg:placeholder:text-center lg:mb-5"
                id="nama_institusi"
                name="nama_institusi"
                type="text"
                placeholder="Nama Institusi"
                onChange={formik.handleChange}
                value={formik.values.nama_institusi}
              />
              <div className="bg-white flex flex-wrap items-center justify-start h-fit p-5 mb-4 rounded-lg lg:w-full">
                <p className=" text-gray-950  text-sm w-full h-fit outline-indigo-800 bg-white flex  mb-5 justify-center">
                  Saya bersedia menerima segala informasi terkait kegiatan yang saya ikuti ini dan informasi terkait produk Nutrisi Nutricia Sarihusada melalui: Email, Whatsapp, Telpon.
                </p>
                <input
                  id="setuju-checkbox"
                  type="checkbox"
                  onChange={() => setReadySubmit(!isReadySubmit)}
                  name="setuju"
                  className="w-4 h-4 text-indigo-800 bg-gray-100 border-indigo-800 rounded checked:accent-indigo-800"
                />
                <label htmlFor="setuju-checkbox" className="ml-2 text-sm font-medium text-gray-900" onChange={() => setReadySubmit(!isReadySubmit)}>Setuju</label>
                <div className="w-full">
                  {
                    // map error formik
                    Object.keys(formik.errors).map((key: any, i) => {
                      return (
                        <p key={i} className="text-red-500 text-xs">{key} wajib diisi</p>
                      )
                    })
                  }
                </div>
                <div className="w-full flex justify-center pt-3 text-white font-medium">
                  {/* warning error formik */}
                  <button type="submit" className="bg-indigo-800 w-full h-10 p-2 rounded-md items-center flex justify-center" >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}