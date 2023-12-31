"use client"


import React, { useState } from "react";
import Link from "next/link";
import { Button, Modal } from 'flowbite-react';
import PKAModal from "app/_components/modal/modal";

export default function Page() {

    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const [isSecondEyeOpen, setIsSecondEyeOpen] = useState(false);

    const toggleEye = () => {
        setIsEyeOpen(!isEyeOpen);
    };

    const toggleSecondEye = () => {
        setIsSecondEyeOpen(!isSecondEyeOpen);
    };

    const [openModal, setOpenModal] = useState(false);


    return (
        <>

            <div className="z-20 absolute left-1/2 transform -translate-x-1/2 items-center top-40 text-boilermaker-gold bg-black bg-opacity-80 rounded-3xl p-20 2xl:w-[527px] 2xl:h-[500px] flex justify-center flex-col gap-4">
                <Link href={"/"} className='absolute top-7 right-7'>{x_mark}</Link>
                <h1 className='text-4xl text-boilermaker-gold pb-4  absolute top-10 2xl:top-16'>회원탈퇴</h1>

                <div className="w-full flex flex-col gap-3 pt-7 justify-center text-center">
                    <div className="flex bg-gray-200 w-full rounded-lg p-1 h-10 text-black border-boilermaker-gold border-2">
                        <input
                            type={isEyeOpen ? "text" : "password"}
                            name="password"
                            placeholder="비밀번호"
                            className="w-full rounded-full placeholder-black bg-gray-200 focus:outline-none p-2 ps-4 truncate"

                        />
                        <div className="relative right-2 text-black">
                            <button onClick={toggleEye} className=''>
                                {isEyeOpen ? eye : eye_slash}

                            </button>
                        </div>

                    </div>
                    <div className="flex bg-gray-200 w-96 rounded-lg p-1 h-10 text-black border-boilermaker-gold border-2">
                        <input
                            type={isSecondEyeOpen ? "text" : "password"}
                            name="password"
                            placeholder="비밀번호 재입력"
                            className="w-full rounded-full placeholder-black bg-gray-200 focus:outline-none p-2 ps-4 truncate"

                        />
                        <div className="relative right-2 text-black">
                            <button onClick={toggleSecondEye} className=''>
                                {isSecondEyeOpen ? eye : eye_slash}

                            </button>
                        </div>


                    </div>
                    <div className=" text-red-600 p-1">삭제된 정보는 다시 복구할 수 없습니다.</div>

                    <Button color='boilermaker-gold' onClick={() => setOpenModal(true)} className="flex hover:bg-yellow-600 hover:text-black cursor-pointer z-20 w-full  bg-boilermaker-gold h-9  text-white p-4 rounded-lg drop-shadow-md">

                        <div className="">회원 탈퇴</div>
                    </Button>

                    <Link href={'/'} className='w-full'>
                        <button className="flex w-full hover:cursor-pointer hover:text-black z-20 justify-center items-center cursor-pointer bg-boilermaker-gold h-9 hover:bg-yellow-600 text-white p-4 rounded-lg drop-shadow-md">
                            취소
                        </button>
                    </Link>
                </div>




            </div>
            <PKAModal
                header='정말로 탈퇴하시겠어요?'
                context='탈퇴 버튼 선택 시, 계정은 삭제되며 복구되지 않습니다.'
                button1='탈퇴'
                button2='취소'
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </>
    );
}


const x_mark = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

const eye = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
</svg>


const eye_slash = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
</svg>



