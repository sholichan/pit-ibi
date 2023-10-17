import Image from "next/image"
import ibi from "../../public/img/ibi.png"
import danone from "../../public/img/danone.jpeg"

export default function Header() {
  return (
    <div className="w-full h-fit bg-blue-500 flex px-2 py-5 justify-between">
      <Image
        src={ibi}
        width={50}
        height={50}
        alt='ibi'
      />
      <div className="flex flex-wrap w-full font-medium text-center text-xs justify-center ">
        <h1 className="w-full">
          KONGRES XVII IBI & PIT BIDAN 2023
        </h1>
        <h1 className="w-full">
          Selamat Datang
        </h1>
        <h1 className="w-full">
          Di Booth DANONE INDONESIA
        </h1>
      </div>
      <Image
        src={danone}
        width={50}
        height={50}
        alt='danone'
      />
    </div>
  )
}
