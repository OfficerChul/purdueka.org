// 안쓰면 에러 뜸
"use client"


import React from 'react'
import { BoardResponseDTO } from '../../_dto/board.dto'
import { Category } from 'app/_shared/enums/categories';

export default function Miniboard(props: { category: string, data: Array<BoardResponseDTO> }) {
  const { category, data } = props;
  const categoryKor = Object.values(Category)[Object.keys(Category).indexOf(category)]

  const OnPostClick = (event: any, id: any) => {
    window.open("/announcement/"+id, '_blank')?.focus()
  }

  return (
    <div className="flex justify-center bg-yellow-600 h-72">
      <div className="flex overflow-hidden flex-col text-black border-8 border-white w-full mt-1 mb-1 bg-white">
        <div className="flex justify-between mb-4">
          <span className="text-xl">{categoryKor}</span>
          <a className='text-xs' href={'/'+category}>더보기</a>
        </div>
        {
          data.map( 
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

const data: BoardResponseDTO[] = [
  {
    id: 0,
    title: "2023년 기묘한 밤",
    date: "1 시간 전",
    author: "PKA",
    views: 30,
  },
  {
    id: 1,
    title: "asdfs",
    date: "2023.09.10",
    author: "ffff",
    views: 4,
  },
  {
    id: 2,
    title: "asdfs",
    date: "2023.09.10",
    author: "ffff",
    views: 4,
  },
  {
    id: 3,
    title: "asdfs",
    date: "2023.09.10",
    author: "ffff",
    views: 4,
  },
  {
    id: 4,
    title: "[Hwanwha 2-23 Hanhwa Travel Award 모집공고",
    date: "2023.09.10",
    author: "ffff",
    views: 4,
  }
]
