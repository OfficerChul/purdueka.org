// 안쓰면 에러 뜸
"use client"


import React from 'react'
import { BoardResponseDTO } from '../../_dto/board.dto'
import { Category } from 'app/_shared/enums/categories';
import { paginate } from 'app/_helper/pagination';

export default function Miniboard(props: { category: string, data: Array<BoardResponseDTO> }) {
  const { category, data } = props;
  const categoryKor = Object.values(Category)[Object.keys(Category).indexOf(category)]
  const numOfPosts = 10;

  const OnPostClick = (event: any, id: any) => {
    window.open("/announcement/"+id, '_blank')?.focus()
  }

  const paginatedPosts = paginate(data, 1, numOfPosts);

  return (
    <div className="flex justify-center bg-yellow-600" style={{minHeight: 308 + 'px'}}>
      <div className="flex overflow-hidden flex-col text-black border-8 border-white w-full mt-1 mb-1 bg-white">
        <div className="flex justify-between mb-4">
          <span className="text-xl">{categoryKor}</span>
          <a className='text-xs' href={'/'+category}>더보기</a>
        </div>
        {
          paginatedPosts.map( 
            e => <div key={e.id} className='flex justify-between cursor-pointer hover:text-stone-400' onClick={event => OnPostClick(event, e.id)}>
              <span>{e.title}</span>
              <span className='text-stone-400 text-xs'>{e.date}</span>
            </div>
          )
        }   
          
      </div>
    </div>

  )
}
