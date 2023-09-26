import Miniboard from './_components/miniboard/miniboard'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className="justify-center w-4/5 grid sm:grid-cols-1 md:grid-cols-3 mt-10 gap-1">
          <div className="grid grid-cols-2 gap-1 md:hidden">
            <h1 className="bg-yellow-600">THREE<Image alt='google' width='300' height='96' src='/google_logo.png'></Image></h1>
            <h1 className="bg-purple-600">EIGHT<Image alt='qrcode' width='300' height='96' src='/qrcode.png'></Image></h1>
          </div>
          
          <div className="bg-teal-500">
            <h1 className="  ">
              {/* here */}
              <Miniboard />
              {/* here */}
            </h1>
          </div>
          <div className="  bg-amber-500">
            <h1 className="  ">
              {/* here */}
              <Miniboard />
              {/* here */}
            </h1>
          </div>


          <div className="  bg-yellow-500 row-span-2 md:w-4/5 md:flex hidden">
            <h1 className="   ">THREE</h1>
          </div>


          <div className="bg-lime-600">
            <h1 className="  ">
              {/* here */}
              <Miniboard />
              {/* here */}
            </h1>
          </div>
          <div className="  bg-green-600">
            <h1 className="  ">
              {/* here */}
              <Miniboard />
              {/* here */}
            </h1>
          </div>
          {/* <div className="  bg-emerald-500">
            <h1 className="  ">SIX</h1>
          </div> */}
          <div className="  bg-teal-500 md:col-span-2 sm:col-span-1">
            <h1 className="  ">
              <Miniboard />
            </h1>
          </div>
          <div className="  bg-purple-500 hidden md:w-4/5 md:flex">
            <h1 className="  ">EIGHT</h1>
          </div>


        </div>
      </div>
    </>

  )
}
