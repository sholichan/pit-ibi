import Image from "next/image"
import ibi from "../../public/img/ibi.png"
import danone from "../../public/img/danone.jpeg"

export default function Header() {
  return (
    <div className="w-full h-fit rounded rounded-b-3xl bg-indigo-800 flex flex-wrap px-2 py-10 justify-between">
      <div className=" w-full h-fit flex justify-center pb-5">
        <Image
          src={ibi}
          width={50}
          height={50}
          alt='ibi'
        />
        <div className="h-auto w-0.5 bg-white mx-4"></div>
        {/* <div className="flex flex-wrap w-fit font-medium text-center text-lg justify-center lg:mx-20">
          <h1 className="w-full">
            KONGRES XVII IBI & PIT BIDAN 2023<br />SELAMAT DATANG<br />DI BOOTH DANONE INDONESIA
          </h1>
        </div> */}
        <Image
          src={danone}
          width={50}
          height={50}
          alt='danone'
        />
      </div>
      <div className="flex flex-wrap w-full font-medium text-center text-lg justify-center pb-10">
        <h1 className="w-full">
          KONGRES XVII IBI & PIT BIDAN 2023<br />SELAMAT DATANG<br />DI BOOTH DANONE INDONESIA
        </h1>

      </div>

    </div>
  )
}
