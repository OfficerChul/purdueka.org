"use client"


import React, { useState } from "react";
import Link from "next/link";
import { Button } from 'flowbite-react';

export default function Page() {
  // const [isMenuOpen, setIsMenuOpen] = useState(true);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <>

      {/* <div className={`${isMenuOpen ? "" : "hidden"} absolute left-1/2 transform -translate-x-1/2 items-center top-40 text-boilermaker-gold bg-black bg-opacity-80 rounded-3xl p-20 w-[527px] h-[500px] flex justify-center flex-col gap-4`}>
        <button onClick={toggleMenu} className='absolute top-7 right-7'>{x_mark}</button> */}
      <div className="z-20 absolute left-1/2 transform -translate-x-1/2 items-center top-40 text-boilermaker-gold bg-black bg-opacity-80 rounded-3xl p-20 lg:w-[480px] lg:h-[400px] 2xl:w-[527px] 2xl:h-[500px] flex justify-center flex-col gap-4">
        {/* <button className='absolute top-7 right-7'>{x_mark}</button> */}
        <Link href={"/null"} className='absolute top-7 right-7'>{x_mark}</Link>
        <h1 className='text-4xl text-boilermaker-gold pb-4 absolute top-10 2xl:top-16'>로그인</h1>
        <div className="w-full gap-3 flex flex-col justify-center text-center pt-7">
          <div className="flex bg-gray-200 w-full rounded-lg p-1 h-10 border-boilermaker-gold border-2">
            <input
              type="email"
              name="email"
              placeholder="이메일 주소"
              className="w-full rounded-full placeholder-black bg-gray-200 focus:outline-none p-2 ps-4 truncate"
            />
          </div>
          <div className="flex bg-gray-200 w-full rounded-lg h-10 p-1 border-boilermaker-gold border-2">
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              className="w-full rounded-full placeholder-black bg-gray-200 focus:outline-none p-2 ps-4 truncate"
            />
          </div>

          <Button color='boilermaker-gold' className="outline-boilermaker-gold border-2 border-boilermaker-gold w-full cursor-pointer bg-boilermaker-gold h-9 hover:bg-yellow-600 text-white p-4 rounded-lg drop-shadow-md">
            로그인
          </Button>

          <div className='pt-6'>
            <span>회원이 아니신가요?</span>
            <Link href="/signup" className="pl-1 text-[#2670FF]">
              회원가입
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}


const x_mark = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
