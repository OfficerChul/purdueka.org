"use client"
import api from 'app/_api'
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default async function Page() {
  return (
    <>

      <div className="absolute left-1/2 transform -translate-x-1/2 items-center top-40 text-boilermaker-gold bg-black bg-opacity-80 rounded-3xl p-20 w-[527px] h-[500px] flex justify-center flex-col gap-4">
        <h1 className=' text-4xl text-boilermaker-gold pb-4'>로그인</h1>
        <div className="flex bg-gray-200 w-full rounded-lg p-1 border border-boilermaker-gold border-2">
          <input
            type="email"
            name="email"
            placeholder="이메일 주소"
            className="w-full rounded-full placeholder-black bg-gray-200 focus:outline-none p-2 ps-4 truncate"
          />
        </div>
        <div className="flex bg-gray-200 w-full rounded-lg p-1 border border-boilermaker-gold border-2">
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            className="w-full rounded-full placeholder-black bg-gray-200 focus:outline-none p-2 ps-4 truncate"
          />
        </div>
        <button className="flex w-full hover:cursor-pointer z-20">
          <input
            type="submit"
            className="w-full bg-boilermaker-gold text-white p-4 rounded-lg drop-shadow-md"
            value="로그인"
          />
        </button>
        <div>
          <span>회원이 아니신가요?</span>
          <a href="/recover" className="pl-1 text-[#2670FF]">
            회원가입
          </a>
        </div>

      </div>
    </>
  );
}
