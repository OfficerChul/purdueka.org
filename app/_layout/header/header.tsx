"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>

      <div className={`py-2 transition-all duration-300 ease-in ${isMenuOpen ? "" : 'right-[-100%]'} bg-yellow-600 fixed h-full right-0 w-9/12`}>

        <div className="bg-[#CEB888] h-full p-5">

          {/* mobile screen */}
          <ul className="text-stone-950 flex gap-4 flex-col">
            <div className="text-stone-950 text-3xl">Menu</div>
            <div className="absolute right-5 flex gap-1">
              <button className={`transition-all duration-300 ease-in text-stone-950 md:hidden`}>
                {searchIcon}
              </button>
              <button onClick={toggleMenu} className={`transition-all duration-300 ease-in ${isMenuOpen ? "" : "hidden"} text-stone-950 md:hidden`}>
                {close}
              </button>
            </div>
            <hr className="border-t border-stone-950"/>
            <li><Link href='/intro' className={`${underlineEffect} text-2xl`}>소개</Link></li>
            <li><Link href='/info' className={`${underlineEffect} text-2xl`}>퍼듀 정보</Link></li>
            <li><Link href='/hire-announcement' className={`${underlineEffect} text-2xl`}>채용 공고</Link></li>
            <li><Link href='/contact' className={`${underlineEffect} text-2xl`}>Contact Us</Link></li>
            <li><Link href='/search' className={`${underlineEffect} text-2xl`}>사고/팔고</Link></li>

          </ul>
          <div className="absolute right-0 bottom-2 flex gap-3 text-white p-3">
            <button className='bg-stone-950 px-3 py-1 border border-stone-950'>Log In</button>
            <button className='bg-yellow-600 px-3 py-1 border border-stone-950'>Sign Up</button>
          </div>
        </div>

      </div>
      <nav className=" bg-white sm:bg-stone-950 w-full h-20">
        <div className="items-center m-auto container flex justify-between truncate">

          <button onClick={toggleMenu} className={`${isMenuOpen ? "hidden" : ""} text-stone-950 md:hidden absolute right-5`}>
            {hamburger}
          </button>



          <Link href='/' ><Image className='h-20 m-auto' src='/pka_logo.png' alt='logo' width='317' height='96'></Image></Link>

          <div className="grow"></div>
          <ul className="text-yellow-600 md:flex lg:gap-10 md:gap-5 md:mr-3 hidden whitespace-nowrap">

            <li><Link href='/intro' className={`${underlineEffect}`}>소개</Link></li>
            <li><Link href='/info' className={`${underlineEffect}`}>퍼듀 정보</Link></li>
            <li><Link href='/hire-announcement' className={`${underlineEffect}`}>채용 공고</Link></li>
            <li><Link href='/contact' className={`${underlineEffect}`}>Contact Us</Link></li>
            <li><Link href='/search' className={`${underlineEffect}`}>{searchIcon}</Link></li>
            <li><Link href='/login' className={`${underlineEffect}`}>{login}</Link></li>

          </ul>





        </div>



      </nav>


      {/* banner start */}

    </>
  )
}

const hamburger = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

const close = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>


const underlineEffect = "relative w-fit after:block after:content-[''] after:absolute after:h-[1px] after:bg-yellow-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

const login = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>
