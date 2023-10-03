// 안쓰면 에러 뜸
"use client" 

import React from 'react'
import { BoardResponseDTO } from '../../_dto/board.dto'

export default function Miniboard(props: { category: string, data: Array<BoardResponseDTO> }) {
  const OnPostClick = (event: any, id: any) => {
    window.open("/announcement/"+id, '_blank')?.focus()
  }

  return (
    <div className="flex justify-center bg-yellow-600 h-72">
      <div className="flex overflow-hidden flex-col text-black border-8 border-white w-full mt-1 mb-1 bg-white">
        <div className="flex justify-between mb-4">
          <span className="text-xl">{props.category}</span>
          <a className='text-xs' href='/'>더보기</a>
        </div>
        {
          props.data.map( 
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
