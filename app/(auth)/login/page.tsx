"use client"

import api from 'app/_api';
import React, { useState } from "react";
import Link from "next/link";
import { Button } from 'flowbite-react';

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailedCount, setLoginFailedCount] = useState(0);
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  
  const handleLogin = async () => {
    const isSucceed = await api.auth.signin({ email, password })
    if (isSucceed) {
      window.location.assign("/");
    } else {
      setLoginFailedCount(loginFailedCount + 1)
    }
  }
  const toggleEye = () => {
    setIsEyeOpen(!isEyeOpen);
  };

  return (
    <>
      <div className="h-32" />
      <div className="w-96 bg-black m-auto items-center text-boilermaker-gold bg-opacity-80 rounded-3xl p-12 flex justify-center flex-col">
        {/* <button className='absolute top-7 right-7'>{x_mark}</button> */}
        <h1 className='text-4xl text-boilermaker-gold'>로그인</h1>
        <div className="w-full gap-3 flex flex-col justify-center text-center pt-7">
          <div className="flex bg-gray-200 w-full rounded-lg p-1 h-10 border-boilermaker-gold border-2">
            <input
              type="email"
              name="email"
              placeholder="이메일 주소"
              className="w-full rounded-full placeholder-black text-black bg-gray-200 focus:outline-none p-2 ps-4 truncate"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex bg-gray-200 w-full rounded-lg h-10 p-1 border-boilermaker-gold border-2">
            <input
              type={isEyeOpen ? "text" : "password"}
              name="password"
              placeholder="비밀번호"
              className="w-full rounded-full placeholder-black  text-black bg-gray-200 focus:outline-none p-2 ps-4 truncate"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="relative right-2 text-black flex items-center">
              <button onClick={toggleEye} className=''>
                {isEyeOpen ? eye : eye_slash}
              </button>
            </div>
          </div>
          <Button color='boilermaker-gold' onClick={() => handleLogin()} className="outline-boilermaker-gold border-2 border-boilermaker-gold w-full cursor-pointer bg-boilermaker-gold h-9 hover:bg-yellow-600 text-white p-4 rounded-lg drop-shadow-md">
            로그인
          </Button>
          <div className='mt-6'>
            <span>회원이 아니신가요?</span>
            <Link href="/signup" className="ml-1 text-[#2670FF]">
              회원가입
            </Link>
          </div>
        </div>
      </div>
      <div className="h-32" />
    </>
  );
}


const x_mark = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

const eye = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
<path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
</svg>


const eye_slash = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
<path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
<path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
</svg>
