import React from 'react'
import Image from 'next/image'

export default function header() {
  return (
    <>
      <nav className=" bg-stone-950 w-full h-20">
        <div className="items-center m-auto container flex justify-between">
          
          
            
          <Image className='h-20 m-auto' src='/pka_logo.png' alt='logo' width='317' height='96'></Image>
          
        
          <div className="grow"></div>
          <ul className='text-yellow-600 flex gap-10'>
            <li><a href='/intro'>소개</a></li>
            <li><a href='/info'>퍼듀 정보</a></li>
            <li><a href='/ann'>채용 공고</a></li>
            <li><a href='/contact'>Contact Us</a></li>
            <li><a href='/search'>검색</a></li>
            <li><a href='/login'>로그인</a></li>
            
          </ul>
      

        </div>
      </nav>

      {/* banner start */}

      <div className="h-[36vw] overflow-hidden">
        <Image alt='banner' src='/banner.jpeg' className='w-full'  width='1280' height='1280'></Image>
      </div>
    </>
  )
}
