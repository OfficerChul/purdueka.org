"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { BoardResponseDTO } from '../../_dto/board.dto'
import { Category } from 'app/_shared/enums/categories'

export default function Board(props: { category: string, data: Array<BoardResponseDTO> }) {
  const router = useRouter()

  let urlParams;
  let page = 1;
  useEffect(() => {
    urlParams = new URLSearchParams(window.location.search)
    let pageParam = urlParams.get('page');
    if (pageParam == null) {
      pageParam = "1"
    }
    page = parseInt(pageParam)
  });

  const categoryKor = Object.values(Category)[Object.keys(Category).indexOf(props.category)]

  const OnPostClick = (event: any, id: any) => {
    router.push("/announcement/"+id)
  }

  const getPagination = () => {
    let pages = [];
    for (let i = 0; i < Math.floor(props.data.length / 10) + 1; i++) {
      if (i + 1 == page) {
        pages.push(<span key={i + 1} className='px-2 text-black select-none'>{i + 1}</span>)
      }
      else {
        pages.push(<a key={i + 1} href={['/', props.category, '?page=', i + 1].join('')} className='px-2 text-yellow-600 hover:text-black'>{i + 1}</a>)
      }
    }
    return pages;
  }

  return (
    <div>
      <div className="flex justify-between mt-10">
        <div className='text-yellow-600 text-2xl'>{categoryKor}</div>
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
        <div className='w-100' style={{minHeight: 394 + 'px'}}>
          <div className='p-2 grid gird-cols-5'>
            <div className='flex'>
              <span className='hidden sm:block px-2 w-20 font-semibold'>Number</span>
              <span className='px-2 grow font-semibold text-center'>Title</span>
              <span className='px-2 w-28 font-semibold text-center'>Date</span>
              <span className='hidden sm:block px-2 w-20 font-semibold text-center'>Author</span>
              <span className='px-2 w-20 font-semibold text-center'>View</span>
            </div>
            <hr className="border border-black h-0 my-4" />
            <div>
              {
                props.data.map(e => <div key={e.id} className='flex hover:bg-yellow-600 hover:cursor-pointer' onClick={event => OnPostClick(event, e.id)}>
                  <div className='hidden sm:block px-2 my-1 w-20'>{e.id}</div>
                  <div className='px-2 my-1 grow'>{e.title}</div>
                  <div className='px-2 my-1 w-28 text-center truncate'>{e.date}</div>
                  <div className='hidden sm:block px-2 my-1 w-20 text-center'>{e.author}</div>
                  <div className='px-2 my-1 w-20 text-center'>{e.views}</div>
                </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4 flex justify-center'>
        <a className='pe-2 text-yellow-600 hover:text-black' href={['/', props.category, '?page=', (page - 1 > 0) ? page - 1 : page].join('')}>&lt; Prev</a>
        {getPagination()}
        <a className='ps-2 text-yellow-600 hover:text-black' href={['/', props.category, '?page=', (page + 1 <= getPagination().length) ? page + 1 : page].join('')}>Next &gt;</a>
      </div>
    </div>
  )
}