import Image from "next/image"
import Link from "next/link"
import poster1 from "../../public/img/poster1.jpg"
import poster2 from "../../public/img/poster2.jpg"
import poster3 from "../../public/img/poster3.jpg"
import { useState } from "react"
import Layout from "./layout"

const images = [poster1, poster2, poster3, poster1]
let posterIndex: any = null

export default function HomePoster() {
  const [isClicked, setClicked] = useState<boolean>(true);
  return (
    isClicked ? (
      <Layout>

        <div className="flex flex-wrap w-full p-4 justify-center h-auto ">
          {images.map((image, index) => (
            <div key={index} className="w-1/2 h-fit p-2 animate-wiggle animate-infinite">
              <Image
                key={index}
                src={image}
                layout="responsive"
                alt={`poster${index + 1}`}
                onClick={() => {
                  posterIndex = index
                  setClicked(false)
                }}
              />
            </div>
          ))}
          <Link className="bg-red-500 w-1/3 h-8 m-2 rounded-md items-center flex justify-center" href="/quiz">
            <button >
              Quiz
            </button>
          </Link>
        </div>
      </Layout>

    ) : (
      <Layout>

        <div className="flex w-full">
          <Image
            src={images[posterIndex]}
            objectFit="cover"
            layout="responsive"
            alt="poster1"
            onClick={() => {
              setClicked(true)
            }}
          />
        </div>
      </Layout>

    )
  );
}

