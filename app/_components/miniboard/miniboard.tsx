// 안쓰면 에러 뜸
"use client" 

import React from 'react'

export default function Miniboard() {
  return (
    <div className="flex justify-center bg-yellow-600 h-72">
      <div className="flex overflow-hidden flex-col text-black border-8 border-white w-full mt-1 mb-1 bg-white">
        <div className="flex justify-between mb-4">
          <span className="text-xl">공지사항</span>
          <a className='text-xs' href='/'>더보기</a>
        </div>
        <div className="flex justify-between">
          <span>[Hwanwha 2-23 Hanhwa Travel Award 모집공고</span>
          <span className='text-stone-400'>2023.09.04</span>
        </div>
        <div className="flex justify-between">
          <span>[Hwanwha 2-23 Hanhwa Travel Award 모집공고</span>
          <span className='text-stone-400'>1시간 전</span>
        </div>
        <div className="flex justify-between">
          <span>[Hwanwha 2-23 Hanhwa Travel Award 모집공고</span>
          <span className='text-stone-400'>1시간 전</span>
        </div>
            
          
      </div>
    </div>
        
  )
}
