"use client"

import { BoardDataInterface } from '../../_interfaces/BoardDataInterface'

export default function Board(props: { category: string, data: Array<BoardDataInterface> }) {
    return (
        <div>
        <div className="flex justify-between mt-10">
          <div className='text-yellow-600 text-2xl'>{props.category}</div>
          <div>
            {/* <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label> */}
            <input type="text" id="first_name" className="border border-black text-gray-900 text-sm block w-full p-2.5" placeholder="검색하세요." />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            글쓰기
          </button>
        </div>
        <div className='mt-4 border border-x-white border-y-yellow-600 border-y-4'>
          <div className='w-100'>
            <div className='p-2 grid gird-cols-5'>
              <div className='flex'>
                <span className='px-2 min-w-[80px] font-semibold'>Number</span>
                <span className='px-2 grow font-semibold text-center'>Title</span>
                <span className='px-2 min-w-[100px] font-semibold text-center'>Date</span>
                <span className='px-2 min-w-[80px] font-semibold text-center'>Author</span>
                <span className='px-2 min-w-[80px] font-semibold text-center'>View</span>
              </div>
              <hr className="border border-black h-0 my-4" />
              <div>
                {
                  props.data.map(e => <div key={e.id} className='flex hover:bg-yellow-600 hover:cursor-pointer'>
                    <div className='px-2 my-1 min-w-[80px]'>{e.id}</div>
                    <div className='px-2 my-1 grow'>{e.title}</div>
                    <div className='px-2 my-1 min-w-[100px] text-center truncate'>{e.date}</div>
                    <div className='px-2 my-1 min-w-[80px] text-center'>{e.author}</div>
                    <div className='px-2 my-1 min-w-[80px] text-center'>{e.views}</div>
                  </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div className='mt-4 flex justify-center'>
          <span className='pe-2 text-yellow-600 hover:text-black hover:cursor-pointer'>&lt; Prev</span>
          <span className='px-2 text-yellow-600 hover:text-black hover:cursor-pointer'>1</span>
          <span className='px-2 text-yellow-600 hover:text-black hover:cursor-pointer'>2</span>
          <span className='px-2 text-yellow-600 hover:text-black hover:cursor-pointer'>3</span>
          <span className='ps-2 text-yellow-600 hover:text-black hover:cursor-pointer'>Next &gt;</span>
        </div>
      </div>
    )
  }