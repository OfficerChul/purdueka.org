"use client"


import React, { useState } from "react";
import Link from "next/link";
import { Button } from 'flowbite-react';
import { isEmailAddress, datestringToDate } from "app/_helper/lib";
import _api from "app/_api";

export default function Page() {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [isConfirmEyeOpen, setIsConfirmEyeOpen] = useState(false);

  const toggleEye = () => {
    setIsEyeOpen(!isEyeOpen);
  };

  const toggleConfirmEye = () => {
    setIsConfirmEyeOpen(!isConfirmEyeOpen);
  };

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordState, setPasswordState] = useState<string>("init");
  const comparePassword = () => {
    if (password !== confirmPassword) {
      setPasswordState("mismatch");
    } else {
      setPasswordState("submitable");
    }
  }

  const [email, setEmail] = useState("")
  const [emailState, setEmailState] = useState<string>("init");
  const confirmEmailAddress = async () => {
    if (!isEmailAddress(email)) {
      setEmailState("invalid");
    } else if (await _api.user.doesEmailExist({ email })) {
      setEmailState("duplicated");
    } else {
      setEmailState("submitable");
    }
  }
  const [firstName, setFirstName] = useState("")
  const [firstNameState, setFirstNameState] = useState("init")
  const [lastName, setLastName] = useState("")
  const [lastNameState, setLastNameState] = useState("init")
  const [major, setMajor] = useState("")
  const [majorState, setMajorState] = useState("init")
  const [expectedGradDate, setExpectedGradDate] = useState("")
  const [expectedGradDateState, setExpectedGradDateState] = useState("init")

  const validateFirstname = () => {
    if (firstName.length > 0) {
      setFirstNameState("submitable")
    } else {
      setFirstNameState("empty")
    }
  }
  const validateLastName = () => {
    if (lastName.length > 0) {
      setLastNameState("submitable")
    } else {
      setLastNameState("empty")
    }
  }
  const validateMajor = () => {
    if (major.length > 0) {
      setMajorState("submitable")
    } else {
      setMajorState("empty")
    }
  }
  const validateExpectedGradDate = () => {
    if (expectedGradDate.length > 0) {
      setExpectedGradDateState("submitable")
    } else {
      setExpectedGradDateState("empty")
    }
  }

  const submit = async () => {
    const submitable = [emailState, passwordState, firstNameState, lastNameState, majorState, expectedGradDateState].every(e => e === "submitable")
    if (submitable) {
      const isSuccess = await _api.user.signup({
        email,
        password,
        firstname: firstName,
        lastname: lastName,
        major,
        expectedGradDate: datestringToDate(expectedGradDate),
      })
      if (isSuccess) {
        window.location.assign("/")
      }
    }
  }


  return (
    <>
      <div className="h-32" />
      <div className="w-96 bg-black m-auto items-center text-boilermaker-gold bg-opacity-80 rounded-3xl p-12 flex justify-center flex-col">
        {/* <button className='absolute top-7 right-7'>{x_mark}</button> */}
        <Link href={"/login"} className='absolute top-7 right-7'>{x_mark}</Link>
        <h1 className='text-4xl text-boilermaker-gold pt-3'>회원가입</h1>
        <div className="mt-4 flex bg-gray-200 w-full rounded-lg p-1 h-10 text-black border-boilermaker-gold border-2">
          <input
            type="email"
            name="email"
            placeholder="이메일 주소"
            className="w-full rounded-full placeholder-black bg-gray-200 focus:outline-none p-2 ps-4 truncate"
            onChange={e => setEmail(e.target.value.trim())}
            onBlur={confirmEmailAddress}
          />
        </div>
        {emailState === "invalid" && (
          <span className="text-red-600 p-0 m-0">유효하지 않은 이메일 주소입니다. 다시 확인해주세요.</span>
        )}
        {emailState === "duplicated" && (
          <span className="text-red-600 p-0 m-0">이미 존재하는 이메일 주소입니다. 패스워드를 복구해드릴까요?</span>
        )}
        <div className="mt-4 flex bg-gray-200 w-full rounded-lg p-1 h-10 text-black border-boilermaker-gold border-2">
          <input
            type={isEyeOpen ? "text" : "password"}
            name="password"
            placeholder="비밀번호"
            className="w-full rounded-full placeholder-black bg-gray-200 focus:outline-none p-2 ps-4 truncate"
            onChange={e => setPassword(e.target.value)}
            onBlur={comparePassword}
          />
          <div className="relative right-2 text-black flex items-center">
            <button onClick={toggleEye} className=''>
              {isEyeOpen ? eye : eye_slash}
            </button>
          </div>
        </div>
        <div className="mt-4 flex bg-gray-200 w-full rounded-lg p-1 h-10 text-black border-boilermaker-gold border-2">
          <input
            type={isConfirmEyeOpen ? "text" : "password"}
            name="password"
            placeholder="비밀번호 재입력"
            className="w-full rounded-full placeholder-black bg-gray-200 focus:outline-none p-2 ps-4 truncate"
            onChange={e => setConfirmPassword(e.target.value)}
            onBlur={comparePassword}
          />
          <div className="relative right-2 text-black flex items-center">
            <button onClick={toggleConfirmEye} className=''>
              {isConfirmEyeOpen ? eye : eye_slash}
            </button>
          </div>
        </div>
        {passwordState === "mismatch" && (
          <span className="text-red-600 p-0 m-0">비밀번호가 일치하지 않습니다. 다시 확인해주세요.</span>
        )}
        <div className="mt-4 flex gap-3">
          <div className="flex bg-gray-200 w-full rounded-lg p-1 h-10 text-black border-boilermaker-gold border-2">
            <input
              type="text"
              name="lname"
              placeholder="성"
              className="w-full rounded-full placeholder-black bg-gray-200 focus:outline-none p-2 ps-4 truncate"
              onBlur={validateFirstname}
              onChange={e => { setFirstName(e.target.value.trim());}}
            />

          </div>
          <div className="flex bg-gray-200 w-full rounded-lg p-1 h-10 text-black border-boilermaker-gold border-2">
            <input
              type="text"
              name="fname"
              placeholder="이름"
              className="w-full rounded-full placeholder-black bg-gray-200 focus:outline-none p-2 ps-4 truncate"
              onBlur={validateLastName}
              onChange={e => {setLastName(e.target.value.trim());}}
            />

          </div>
        </div>

        <div className="mt-4 flex bg-gray-200 w-full rounded-lg p-1 h-10 text-black border-boilermaker-gold border-2">
          <input
            type="text"
            name="major"
            placeholder="전공"
            className="w-full rounded-full placeholder-black bg-gray-200 focus:outline-none p-2 ps-4 truncate"
            onBlur={validateMajor}
            onChange={e => {setMajor(e.target.value.trim());}}
          />
          {/* https://tailwindui.com/components/application-ui/elements/dropdowns */}
        </div>
        <div className="mt-4 w-full">
          <label htmlFor="">졸업예정일 (optional) </label>
        </div>
        <div className="flex bg-gray-200 w-full rounded-lg p-1 h-10 text-black border-boilermaker-gold border-2">
          <input
            type="date"
            name="expected graduation date"
            placeholder="졸업예정일"
            onBlur={validateExpectedGradDate}
            onChange={e => { setExpectedGradDate(e.target.value); }}
            className="w-full rounded-full placeholder-black bg-gray-200 focus:outline-none p-2 ps-4 truncate"
          />
          {/* https://flowbite.com/docs/plugins/datepicker/ */}
        </div>
        <Button onClick={() => submit()} color='boilermaker-gold' className="mt-4 border-2 border-boilermaker-gold w-full cursor-pointer bg-boilermaker-gold h-9 hover:bg-yellow-600 text-white p-4 rounded-lg drop-shadow-md">
          회원가입
        </Button>
      </div>
      <div className="h-32" />
    </>
  );
}


const x_mark = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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



