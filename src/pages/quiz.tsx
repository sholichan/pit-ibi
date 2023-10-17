import Link from "next/link"
import Layout from "../components/layout"
import { useQRCode } from "next-qrcode"

export default function HomePoster() {
  const { Canvas } = useQRCode();
  return (

    <Layout>
      <div className="flex flex-wrap w-auto lg:w-80 p-2 justify-between items-center h-fit my-5 ">
        <div className="bg-white w-full justify-center flex flex-wrap h-auto py-5 my-5 mx-10 rounded-xl text-gray-950">
          <h1 className="font-bold w-full flex justify-center text-lg">
            Scan QR Code
          </h1>
          <h1 className=" text-gray-500 w-full flex justify-center text-sm">
            Scan to generate Quiz link
          </h1>
        </div>
        <div className="w-full justify-center flex h-fit p-2 mb-14 rounded-lg">
          <Canvas
            text={'PIT IBI QUIZ'}
            options={{
              errorCorrectionLevel: 'M',
              margin: 1,
              scale: 5,
              width: 280,
              color: {
                dark: '#000000',
                light: '#ffffff',
              },
            }}
          />
        </div>
          <Link className="bg-blue-500 w-5/12 h-12 p-2 rounded-md items-center flex justify-center" href="/">
            <button >
              Home
            </button>
          </Link>
          <Link className="bg-blue-500 w-6/12 h-12 p-2 rounded-md items-center flex justify-center" href="/register">
            <button >
              Info Lanjutan
            </button>
          </Link>
      </div>
    </Layout>
  )
}

