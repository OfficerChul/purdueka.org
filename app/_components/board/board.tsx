"use client"

import { useRouter } from 'next/navigation'
import { BoardResponseDTO } from '../../_dto/board.dto'
import Pagination from '../pagination/pagination'
import { useState } from 'react'
import { paginate } from 'app/_helper/pagination'
import _api from 'app/_api'
import { hasLoggedIn } from 'app/_helper/lib'
import { UserRole } from 'app/_dto/auth.dto'

export default function Board(props: { baseUrl: string, title: string, data: Array<BoardResponseDTO> }) {
  const { baseUrl, title, data } = props;
  const canWrite = baseUrl === "announcement" ? [UserRole.ADMIN] : [UserRole.ADMIN, UserRole.USER]
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const router = useRouter()
  const user = _api.auth.whoami()

  const OnPostClick = (event: any, id: any) => {
    router.push(`/${baseUrl}/${id}`);
  }

  const OnPageChange = (page: number) => {
    setCurrentPage(page);
  }

  const paginatedPosts = paginate(data, currentPage, pageSize);

  return (
    <div className='mt-10'>
      <hr className="bg-boilermaker-gold w-1/3 h-2 my-4" />
      <div className="flex justify-between">
        <div className='text-2xl'>{title}</div>
        <div className='flex'>
          {
            hasLoggedIn(user) &&
            canWrite.includes(user.role) &&
            <>
              <div className='flex items-center border border-black text-gray-900 text-sm w-56 px-2'>
                <input type="text" id="first_name" className="focus:outline-none w-full" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <button className="bg-boilermaker-gold ms-4 py-2 px-4 rounded" onClick={() => router.push(`/${baseUrl}/new`)}>글쓰기</button>
            </>
          }
        </div>
      </div>
      <div className='mt-10 border border-white'>
        <div className='w-100' style={{ minHeight: 394 + 'px' }}>
          <div className='p-2 grid gird-cols-5'>
            <div className='flex'>
              <span className='px-2 grow font-semibold text-center'>제목</span>
              <span className='px-2 w-28 lg:w-36 font-semibold'>날짜</span>
              <span className='hidden sm:block px-2 w-20 lg:w-36 font-semibold'>작성자</span>
              <span className='px-2 w-16 sm:w-24 lg:w-28 font-semibold'>조회수</span>
            </div>
            <div className='mt-4'>
              {
                paginatedPosts.map(e => <div key={e.id} className='flex hover:underline hover:cursor-pointer' onClick={event => OnPostClick(event, e.id)}>

                  <div className='px-2 my-1 grow'>{e.title}</div>
                  <div className='px-2 my-1 w-28 lg:w-36 truncate'>{e.date}</div>
                  <div className='hidden sm:block px-2 my-1 w-20 lg:w-36'>{e.author}</div>
                  <div className='px-2 my-1 w-16 sm:w-24 lg:w-28'>{e.views}</div>
                </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
      <Pagination
        items={data.length}
        currentPage={currentPage}
        pageSize={pageSize}
        OnPageChange={OnPageChange} />
    </div>
  )
}