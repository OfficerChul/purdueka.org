import Miniboard from './_components/miniboard/miniboard'
import Image from 'next/image'
import { data } from './_shared/test_data'

export default function Home() {
  return (
    <>
      <div className="m-auto container">
        <div className=" justify-center grid grid-cols-1 mx-1 md:m-auto md:grid-cols-5 gap-1 truncate">
          {/* mobile */}
          <div className="grid grid-cols-2 gap-1 md:hidden">
            <h1 className="bg-yellow-600">THREE<Image alt='google' width='300' height='96' src='/google_logo.png'></Image></h1>
            <h1 className="bg-purple-600">EIGHT<Image alt='qrcode' width='300' height='96' src='/qrcode.png'></Image></h1>
          </div>
          
          {/* table + large screen */}
          <div className="bg-teal-500 md:col-span-2">
            <h1 className="  ">
              {/* here */}
              <Miniboard category='공지사항' data={data} />
              {/* here */}
            </h1>
          </div>
          <div className="bg-amber-500 md:col-span-2 w-[500px]">
            <h1 className="  ">
              {/* here */}
              <Miniboard category='렌트/룸메' data={data} />
              {/* here */}
            </h1>
          </div>


          <div className="  bg-yellow-500 row-span-2 md:flex hidden">
            <h1 className="   ">THREE</h1>
          </div>


          <div className="bg-lime-600 md:col-span-2">
            <h1 className="  ">
              {/* here */}
              <Miniboard category='채용공고' data={data} />
              {/* here */}
            </h1>
          </div>
          <div className="  bg-green-600 md:col-span-2">
            <h1 className="  ">
              {/* here */}
              <Miniboard category='사고/팔고' data={data} />
              {/* here */}
            </h1>
          </div>
          {/* <div className="  bg-emerald-500">
            <h1 className="  ">SIX</h1>
          </div> */}
          <div className="  bg-teal-500 md:col-span-4 sm:col-span-1">
            <h1 className="  ">
              <Miniboard category='Gallery' data={data} />
            </h1>
          </div>
          <div className="  bg-purple-500 hidden md:flex">
            <h1 className="  ">EIGHT</h1>
          </div>


        </div>
      </div>
    </>

  )
}
