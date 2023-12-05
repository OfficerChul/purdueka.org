// 안쓰면 에러 뜸
"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import { BoardResponseDTO } from '../../_dto/board.dto'
import { paginate } from 'app/_helper/pagination';

export default function Miniboard(props: { baseUrl: string, title: string, data: Array<BoardResponseDTO> }) {
  const { baseUrl, title, data } = props;
  const numOfPosts = 10;
  const router = useRouter()

  const OnPostClick = (event: any, id: any) => {
    router.push(`/${baseUrl}/${id}`);
  }

  const paginatedPosts = paginate(data, 1, numOfPosts);

  return (
    <div className="flex justify-center bg-boilermaker-gold">
      <div className="flex overflow-hidden flex-col text-black border-8 border-white w-full mt-1 bg-white">
        <div className="flex justify-between mb-4">
          <span className="text-xl">{title}</span>
          <a className='text-xs' href={`/${baseUrl}`}>더보기</a>
        </div>
        {
          paginatedPosts.map( 
            e => <div key={e.id} className='flex justify-between items-center cursor-pointer hover:text-stone-400' onClick={event => OnPostClick(event, e.id)}>
              <span>{e.title}</span>
              <span className='text-stone-400 text-xs'>{e.date}</span>
            </div>
          )
        }
          
      </div>
    </div>

  )
}
