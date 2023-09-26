"use client"

import React, { useState } from 'react'
import Image from 'next/image'

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <div className={`mobile-menu ${isMenuOpen ? '' : 'hidden'} bg-yellow-600 fixed h-full right-0`}>
        <div className="bg-[#CEB888] h-full mt-1 mb-1">
          <button className='' onClick={toggleMenu}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg></button>

          <ul className="text-yellow-600 py-2 px-2md:hidden mobile-menu pr-24">
            <li><a href='/intro' className=" text-2xl relative w-fit after:block after:content-[''] after:absolute after:h-[1px] after:bg-yellow-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">소개</a></li>
            <li><a href='/info' className=" text-2xl relative w-fit after:block after:content-[''] after:absolute after:h-[1px] after:bg-yellow-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">퍼듀 정보</a></li>
            <li><a href='/ann' className=" text-2xl relative w-fit after:block after:content-[''] after:absolute after:h-[1px] after:bg-yellow-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">채용 공고</a></li>
            <li><a href='/contact' className=" text-2xl relative w-fit after:block after:content-[''] after:absolute after:h-[1px] after:bg-yellow-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Contact Us</a></li>
            <li><a href='/search' className=" text-2xl relative w-fit after:block after:content-[''] after:absolute after:h-[1px] after:bg-yellow-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">검색</a></li>
            <li><a href='/login' className=" text-2xl relative w-fit after:block after:content-[''] after:absolute after:h-[1px] after:bg-yellow-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">로그인</a></li>

          </ul>
        </div>

      </div>
      <nav className=" bg-stone-950 w-full h-20">
        <div className="items-center m-auto container flex justify-between">



          <Image className='h-20 m-auto' src='/pka_logo.png' alt='logo' width='317' height='96'></Image>


          <div className="grow"></div>
          <ul className="text-yellow-600 md:flex gap-10 hidden">

            <li><a href='/intro' className="relative w-fit after:block after:content-[''] after:absolute after:h-[1px] after:bg-yellow-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">소개</a></li>
            <li><a href='/info' className="relative w-fit after:block after:content-[''] after:absolute after:h-[1px] after:bg-yellow-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">퍼듀 정보</a></li>
            <li><a href='/ann' className="relative w-fit after:block after:content-[''] after:absolute after:h-[1px] after:bg-yellow-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">채용 공고</a></li>
            <li><a href='/contact' className="relative w-fit after:block after:content-[''] after:absolute after:h-[1px] after:bg-yellow-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Contact Us</a></li>
            <li><a href='/search' className="relative w-fit after:block after:content-[''] after:absolute after:h-[1px] after:bg-yellow-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">검색</a></li>
            <li><a href='/login' className="relative w-fit after:block after:content-[''] after:absolute after:h-[1px] after:bg-yellow-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">로그인</a></li>

          </ul>

          <button onClick={toggleMenu} className='text-yellow-600 pr-3 md:hidden mobile-menu-button'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </button>



        </div>



      </nav>


      {/* banner start */}

      <div className="h-[36vw] overflow-hidden">
        <Image alt='banner' src='/banner.jpeg' className='w-full' width='1280' height='1280'></Image>
      </div>
    </>
  )
}
