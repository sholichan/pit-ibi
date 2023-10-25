import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Header from "@/components/header";
import { cities } from "@/components/cities";
import { cities2 } from "@/components/cities2";
import Select from "react-select";

export default function FromRegisterDump() {
  const [sugesData, setSugesData] = useState([]);
  const [isReadySubmit, setIsReadySubmit] = useState(false);
  const [selectedName, setSelectedName] = useState("");

  async function fetchData(data: any) {
    try {
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
    email: Yup.string().email().required('Email harus diisi'),
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
      if (!isReadySubmit) return alert('Anda harus menyetujui persyaratan')
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
            const data = json.data.id;
            localStorage.setItem('antrian', JSON.stringify(data));
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
    <div style={{ minHeight: "100vh", backgroundColor: "#e5e7eb" }}>
      <Header />
      <div className="w-full px-5 lg:px-20 content-wrapper pb-5">
        <div className="bg-white outline outline-1 p-3 lg:px-20 lg:py-10 outline-indigo-800 rounded-2xl shadow-md content">
          <div className="outline outline-1 outline-indigo-800 rounded-lg">
            <div className="font-medium p-3 rounded-t-lg text-white text-center text-sm lg:text-lg w-full h-fit bg-indigo-800">
              Isi data berikut dengan benar dan lengkap
            </div>
            <form onSubmit={formik.handleSubmit} className="text-gray-950 p-3">
              <div className="mb-2">
                <label className="font-bold">Asal Kota/Kabupaten</label>
                <Select
                  options={cities2}
                  placeholder='Pilih Kota'
                  onChange={
                    (selectedOption) => {
                      console.log(selectedOption);
                      formik.setFieldValue('kota', selectedOption?.value)
                    }
                  }
                  onBlur={formik.handleBlur}
                  isSearchable
                />
                {formik.touched.kota && formik.errors.kota ? (
                  <div className="text-red-500 text-sm">{formik.errors.kota}</div>
                ) : null}
              </div>
              <div className="mb-2">
                <label className="font-bold">Nama</label>
                <input
                  className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-indigo-800"
                  type="text"
                  name="name"
                  placeholder="Nama"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm">{formik.errors.name}</div>
                ) : null}
              </div>
              <div id="suges" className="mb-3">
                <ul>
                  {
                    sugesData.map((data: any, i) => (
                      <li key={i} className="p-1" onClick={() => {
                        formik.setFieldValue('name', data.name)
                        formik.setFieldValue('whatsapp', data.whatsapp)
                        formik.setFieldValue('email', data.email)
                        formik.setFieldValue('institusi', data.institusi)
                        formik.setFieldValue('nama_institusi', data.nama_institusi)
                        setSugesData([])
                        setSelectedName(data.name)
                      }}>
                        <span className="p-1 px-3 bg-indigo-800 text-white rounded-sm">
                          {data.name}
                        </span>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="mb-2">
                <label className="font-bold">Nomor Whatsapp</label>
                <input
                  className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-indigo-800"
                  type="text"
                  name="whatsapp"
                  placeholder="+62"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.whatsapp}
                />
                {formik.touched.whatsapp && formik.errors.whatsapp ? (
                  <div className="text-red-500 text-sm">{formik.errors.whatsapp}</div>
                ) : null}
              </div>
              <div className="mb-2">
                <label className="font-bold">Email</label>
                <input
                  className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-indigo-800"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="mb-2">
                <label className="font-bold">Institusi</label>
                <div className="flex flex-wrap w-full h-fit mb-4 rounded-lg border border-indigo-800 p-3">
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
                  {formik.touched.institusi && formik.errors.institusi ? (
                    <div className="text-red-500 text-sm">{formik.errors.institusi}</div>
                  ) : null}
                </div>
              </div>
              <div className="mb-8">
                <label className="font-bold">Nama Institusi</label>
                <input
                  className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-indigo-800"
                  type="text"
                  name="nama_institusi"
                  placeholder="Nama Institusi"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nama_institusi}
                />
                {formik.touched.nama_institusi && formik.errors.nama_institusi ? (
                  <div className="text-red-500 text-sm">{formik.errors.nama_institusi}</div>
                ) : null}
              </div>
              <div className="mb-5 flex flex-wrap border border-indigo-800 p-3 rounded-lg gap-3">
                <label htmlFor="daftar" className=" w-full text-sm font-medium text-gray-900">
                  Apakah anda sudah mendaftar di Aplikasi e-Nutri?
                </label>
                {/* checkbox daftar */}
                <div className="flex items-top w-full">
                  <input
                    id="daftar"
                    type="radio"
                    name="daftar"
                    onChange={() => setIsReadySubmit(!isReadySubmit)}
                    className="w-4 h-4 checked:accent-indigo-800 ring-indigo-800"
                  />
                  <label htmlFor="daftar" className="ml-2 text-sm font-medium text-gray-900">
                    Sudah
                  </label>
                </div>
                <div className="flex items-top w-full">
                  <input
                    id="daftar"
                    type="radio"
                    name="daftar"
                    onChange={() => setIsReadySubmit(!isReadySubmit)}
                    className="w-4 h-4 checked:accent-indigo-800 ring-indigo-800"
                  />
                  <label htmlFor="daftar" className="ml-2 text-sm font-medium text-gray-900">
                    Belum
                  </label>
                </div>
              </div>
              <div className="mb-5">
                {/* checkbox setuju */}
                <div className="flex items-top">
                  <input
                    id="setuju"
                    type="checkbox"
                    name="setuju"
                    onChange={() => setIsReadySubmit(!isReadySubmit)}
                    className="w-4 h-4 checked:accent-indigo-800 ring-indigo-800"
                  />
                  <label htmlFor="setuju" className="ml-2 text-sm font-medium text-gray-900">
                    Saya adalah tenaga Kesehatan dan saya bersedia menerima segala informasi terkait kegiatan yang saya ikuti ini dan informasi terkait produk Nutrisi Nutricia Sarihusada melalui: Email, Whatsapp, Telpon.
                  </label>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-indigo-800 text-white w-full font-bold py-2 px-4 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div style={{ zIndex: '1' }} className="fixed w-full h-12  bg-indigo-800 bottom-0 left-0 rounded-t-3xl">
      </div>
    </div>
  )
}