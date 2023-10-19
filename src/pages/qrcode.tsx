import Link from "next/link"
import Layout from "../components/layout"
import { useQRCode } from "next-qrcode"

export default function Quiz() {
  const { Canvas } = useQRCode();
  return (

    <Layout>
      <div className="bg-indigo-800 flex flex-wrap w-full p-2 justify-center items-center h-full ">
        <div className="w-auto h-5/6 flex flex-wrap p-2 justify-center items-center">

        <h1 className="font-bold text-gray-200  w-full flex justify-center text-2xl">
          Scan QR
        </h1>
        <div className="w-full justify-center flex h-fit p-2 mb-5 rounded-lg">
          <Link href={"/register"}>
            <Canvas
              text={'PIT IBI QUIZ'}
              options={{
                errorCorrectionLevel: 'M',
                margin: 1,
                scale: 5,
                width: 288,
                color: {
                  dark: '#000000',
                  light: '#ffffff',
                },
              }}
            />
          </Link>
        </div>
        <div className="w-72 h-fit flex justify-between">
          <Link className="bg-gray-200 font-medium text-gray-950 w-2/4 h-10 p-2 mr-1 rounded-lg items-center flex justify-center" href="/">
            <button >
              Home
            </button>
          </Link>
          <Link className="bg-gray-200 font-medium text-gray-950 w-2/4 h-10 p-2 ml-1 rounded-lg items-center flex justify-center" href="">
            <button >
              Info Lanjutan
            </button>
          </Link>
        </div>
        </div>
      </div>
    </Layout>
  )
}

