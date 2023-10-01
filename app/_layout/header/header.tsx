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
          <button className='' onClick={toggleMenu}>{x_btn}</button>

          <ul className="text-yellow-600 py-2 px-2 md:hidden mobile-menu pr-24">
            <li><a href='/intro' className={`${underlineEffect} text-2xl`}>소개</a></li>
            <li><a href='/info' className={`${underlineEffect} text-2xl`}>퍼듀 정보</a></li>
            <li><a href='/ann' className= {`${underlineEffect} text-2xl`}>채용 공고</a></li>
            <li><a href='/contact' className= {`${underlineEffect} text-2xl`}>Contact Us</a></li>
            <li><a href='/search' className= {`${underlineEffect} text-2xl`}>검색</a></li>
            <li><a href='/login' className= {`${underlineEffect} text-2xl`}>로그인</a></li>

          </ul>
        </div>

      </div>
      <nav className=" bg-stone-950 w-full h-20">
        <div className="items-center m-auto container flex justify-between truncate">



          <Image className='h-20 m-auto' src='/pka_logo.png' alt='logo' width='317' height='96'></Image>


          <div className="grow"></div>
          <ul className="text-yellow-600 md:flex gap-10 hidden whitespace-nowrap">

            <li><a href='/intro' className={`${underlineEffect}`}>소개</a></li>
            <li><a href='/info' className={`${underlineEffect}`}>퍼듀 정보</a></li>
            <li><a href='/ann' className={`${underlineEffect}`}>채용 공고</a></li>
            <li><a href='/contact' className={`${underlineEffect}`}>Contact Us</a></li>
            <li><a href='/search' className={`${underlineEffect}`}>검색</a></li>
            <li><a href='/login' className={`${underlineEffect}`}>로그인</a></li>

          </ul>

          <button onClick={toggleMenu} className='text-yellow-600 pr-3 md:hidden mobile-menu-button'>
            {hamburger}
          </button>



        </div>



      </nav>
    </>
  )
}

const hamburger = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

const x_btn = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

const underlineEffect = "relative w-fit after:block after:content-[''] after:absolute after:h-[1px] after:bg-yellow-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"