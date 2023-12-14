'use client'

import Miniboard from './_components/miniboard/miniboard'
import Image from 'next/image'
import sponsor_data from "./_shared/tests/sponsor_data"
import PKACarousel from './_components/carousel/carousel'
import { image_data } from './_shared/tests/image_data'
import { ReadAllResponseDto } from './_dto/readAll.dto'
import { useEffect, useState } from 'react'
import _api from './_api'
import { BoardResponseDTO } from './_dto/board.dto'
import Link from 'next/link'

export default function Home() {
  const [announcement, setAnnouncement] = useState([] as BoardResponseDTO[])
  const [career, setCareer] = useState([] as BoardResponseDTO[])
  const [housing, setHousing] = useState([] as BoardResponseDTO[])
  const [fleamarket, setFleamarket] = useState([] as BoardResponseDTO[])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    Promise.all([
      _api.announcement.getAll({ page: 1, pageCount: 10 }),
      _api.career.getAll({ page: 1, pageCount: 10 }),
      _api.housing.getAll({ page: 1, pageCount: 10 }),
      _api.fleamarket.getAll({ page: 1, pageCount: 10 }),
    ]).then(e => {
      [ setAnnouncement, setCareer,
        setHousing, setFleamarket].reduce((acc: ReadAllResponseDto[], cur) => {
        cur(acc[0].data.map(d => ({
          id: d.id,
          author: d.author,
          title: d.title,
          date: d.date,
          views: d.view,
        })))
        const [, ...tail] = acc
        return tail
      }, e)
    })
      ?.finally(() => setLoading(false))
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!announcement) return <p>No data</p>

  return (
    <>
      <div className="mt-20 h-[36vw] bg-cover bg-no-repeat bg-center bg-[url('/banner-70.jpeg')]">
        <div className='container m-auto p-4 text-white z-4'>
          <p className='sm:text-xl md:text-2xl lg:text-3xl'>안녕하세요,<br /><br /></p>
          <p className='sm:text-sm md:text-1xl lg:text-3xl font-thin'>PKA는 퍼듀 재학생, 연구원, 그리고 그 가족분들을 위해<br /> 봉사하는 <span className='font-bold'>Purdue 공식 한인 학생회</span>입니다.<br /><br /></p>
          <p className='sm:text-sm md:text-1xl lg:text-3xl font-thin'>대내적으로는 구성원 간 친목 도모와 학술교류를 매개하<br />고 있습니다. 신입생을 위한 Welcoming Night, 가을체육<br />대회, 그리고 신년회등을 진행하고 있으며, 필요한 경우,<br /> 현지 정착 또한 도와드리고 있습니다.</p>
        </div>
      </div>
      <div className="container m-auto mt-4">
        <div className="flex gap-10 truncate">
          <div className="flex flex-col flex-grow">
            <h1 className="flex-grow">
              <Miniboard baseUrl='announcement' title='공지사항' data={announcement} />
            </h1>
            <h1 className="flex-grow">
              <Miniboard baseUrl='housing' title='렌트/룸메' data={housing} />
            </h1>
          </div>
          <div className="flex flex-col flex-grow">

            <h1 className="flex-grow">
              <Miniboard baseUrl='career' title='채용/인턴쉽' data={career} />
            </h1>
            <h1 className="flex-grow">
              <Miniboard baseUrl='fleamarket' title='사고팔고' data={fleamarket} />
            </h1>
          </div>
          <div className="flex gap-3 flex-col lg:w-70 2xl:w-[349px]">
            <div className="flex flex-col bg-stone-200 p-3 rounded-md gap-2">
              <p className='text-2xl'>PKA 뉴스레터</p>
              <p className='mb-2'>매주 놓치면 안되는 소식</p>
              <input className="rounded bg-stone-400 p-2 placeholder-gray-500" type="text" placeholder='이메일'></input>
              <button className="rounded bg-boilermaker-gold p-2">구독하기</button>
            </div>
            <div className="p-5 flex items-center bg-boilermaker-gold rounded-md h-[70px] text-2xl justify-between">
              <span className='mr-2'>2023 신입생 오픈 채팅</span>
              <span>{kakaotalk_svg}</span>
            </div>
            <Link href="/contact">
              <div className="p-5 flex items-center bg-boilermaker-gold rounded-md h-[70px] text-2xl justify-between">
                <span className='mr-2'>문의하기</span>
                <span>{question_mark_svg}</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="container m-auto my-8">
          <div className="text-2xl flex justify-center">
            PKA의 스폰서
          </div>
          <div className="flex justify-center m-6 overflow-auto">
            {sponsor_data.map((e: any) => e.type == 'platinum' ? <Image key={e.id} className='h-60 min-w-0 flex-shrink-0' src={e.img} alt='logo' width='317' height='96'></Image> : null)}
          </div>
          <div className="flex justify-center m-6 overflow-auto">
            {sponsor_data.map((e: any) => e.type == 'gold' ? <Image key={e.id} className='h-20 w-auto flex-shrink-0' src={e.img} alt='logo' width='317' height='96'></Image> : null)}
          </div>
          <div className="flex justify-center m-6 overflow-auto">
            {sponsor_data.map((e: any) => e.type == 'silver' ? <Image key={e.id} className='h-10 w-auto flex-shrink-0' src={e.img} alt='logo' width='317' height='96'></Image> : null)}
          </div>
        </div>
        {/* <div className="container m-auto mt-14 mb-20 h-56">
          <div className="text-2xl">Gallery</div>
          <PKACarousel image_data={image_data} />
        </div> */}
      </div>
    </>
  )
}

const kakaotalk_svg =
  <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208 191.94"><g><polygon className="cls-1" points="76.01 89.49 87.99 89.49 87.99 89.49 82 72.47 76.01 89.49" /><path className="cls-1" d="M104,0C46.56,0,0,36.71,0,82c0,29.28,19.47,55,48.75,69.48-1.59,5.49-10.24,35.34-10.58,37.69,0,0-.21,1.76.93,2.43a3.14,3.14,0,0,0,2.48.15c3.28-.46,38-24.81,44-29A131.56,131.56,0,0,0,104,164c57.44,0,104-36.71,104-82S161.44,0,104,0ZM52.53,69.27c-.13,11.6.1,23.8-.09,35.22-.06,3.65-2.16,4.74-5,5.78a1.88,1.88,0,0,1-1,.07c-3.25-.64-5.84-1.8-5.92-5.84-.23-11.41.07-23.63-.09-35.23-2.75-.11-6.67.11-9.22,0-3.54-.23-6-2.48-5.85-5.83s1.94-5.76,5.91-5.82c9.38-.14,21-.14,30.38,0,4,.06,5.78,2.48,5.9,5.82s-2.3,5.6-5.83,5.83C59.2,69.38,55.29,69.16,52.53,69.27Zm50.4,40.45a9.24,9.24,0,0,1-3.82.83c-2.5,0-4.41-1-5-2.65l-3-7.78H72.85l-3,7.78c-.58,1.63-2.49,2.65-5,2.65a9.16,9.16,0,0,1-3.81-.83c-1.66-.76-3.25-2.86-1.43-8.52L74,63.42a9,9,0,0,1,8-5.92,9.07,9.07,0,0,1,8,5.93l14.34,37.76C106.17,106.86,104.58,109,102.93,109.72Zm30.32,0H114a5.64,5.64,0,0,1-5.75-5.5V63.5a6.13,6.13,0,0,1,12.25,0V98.75h12.75a5.51,5.51,0,1,1,0,11Zm47-4.52A6,6,0,0,1,169.49,108L155.42,89.37l-2.08,2.08v13.09a6,6,0,0,1-12,0v-41a6,6,0,0,1,12,0V76.4l16.74-16.74a4.64,4.64,0,0,1,3.33-1.34,6.08,6.08,0,0,1,5.9,5.58A4.7,4.7,0,0,1,178,67.55L164.3,81.22l14.77,19.57A6,6,0,0,1,180.22,105.23Z" /></g></svg>

const question_mark_svg = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#CFB991" className="">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
</svg>


