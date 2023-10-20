import Image from "next/image"
import ibi from "../../public/img/ibi.png"
import danone from "../../public/img/danone.png"

export default function Header() {
  return (
    <div className="w-full h-fit rounded rounded-b-3xl bg-indigo-800 flex flex-wrap px-2 py-10 justify-between">
      <div className=" w-full h-fit flex justify-center items-center pb-5">
        <Image
          src={ibi}
          className="w-1/6 h-1/ lg:w-1/12 lg:h-1/12"
          alt='ibi'
        />
        <div className="flex flex-wrap lg:w-fit lg:h-auto font-medium text-center invisible lg:visible h-0 w-0 text-white text-lg justify-center lg:mx-20">
          <h1 className="w-full">
            KONGRES XVII IBI & PIT BIDAN 2023<br />SELAMAT DATANG<br />DI BOOTH DANONE INDONESIA
          </h1>
        </div>
        <div className="h-14 w-0.5 bg-white mx-4 lg:mx-0 lg:invisible "></div>
        <Image
          src={danone}
          className="w-1/6 h-1/5 lg:w-1/12 lg:h-1/12"
          alt='danone'
        />
      </div>
      <div className="flex flex-wrap w-full font-medium text-center lg:invisible text-lg text-white justify-center pb-10">
        <h1 className="w-full">
          KONGRES XVII IBI & PIT BIDAN 2023<br />SELAMAT DATANG<br />DI BOOTH DANONE INDONESIA
        </h1>

      </div>

    </div>
  )
}
