import Miniboard from './_components/miniboard/miniboard'

export default function Home() {
  return (
      <>
      <div className="flex justify-center">
        <div className="justify-center w-4/5 grid grid-cols-3 grid-rows-3 mt-10 gap-1">
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
          <div className="  bg-yellow-500 row-span-2">
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
          <div className="  bg-teal-500 col-span-2">
            <h1 className="  ">
              <Miniboard />
            </h1>
          </div>
          <div className="  bg-purple-500">
            <h1 className="  ">EIGHT</h1>
          </div>


        </div>
      </div>
    </>
    
  )
}
