// 안쓰면 에러 뜸
"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import { BoardResponseDTO } from '../../_dto/board.dto'
import { paginate } from 'app/_helper/pagination';

export default function Miniboard(props: { base_url: string, title: string, data: Array<BoardResponseDTO> }) {
  const { base_url, title, data } = props;
  const numOfPosts = 10;
  const router = useRouter()

  const OnPostClick = (event: any, id: any) => {
    router.push(`/${base_url}/${id}`);
  }

  const paginatedPosts = paginate(data, 1, numOfPosts);

  return (
    <div className="flex justify-center bg-boilermaker-gold" style={{minHeight: 308 + 'px'}}>
      <div className="flex overflow-hidden flex-col text-black border-8 border-white w-full mt-1 mb-1 bg-white">
        <div className="flex justify-between mb-4">
          <span className="text-xl">{title}</span>
          <a className='text-xs' href={`/${base_url}`}>더보기</a>
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
