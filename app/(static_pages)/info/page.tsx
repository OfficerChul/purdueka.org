'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Info() {
    return (
        <div className="container m-auto my-8 mt-32">

            <h1 className='text-4xl'>퍼듀 정보</h1><br />
            <h1 className='my-8 text-2xl'>기업 리쿠르팅, 룸메이트, 그리고 중고거래 정보는 <Link href='/info' className='text-boilermaker-gold'>여기</Link>를 클릭하셔서 확인해주시기를 바랍니다.</h1>
            <hr />

            <h1 className='my-8 text-3xl'>신입생 정보</h1>

            <ul className='list-disc'>
                <li><Link className='text-boilermaker-gold' href='https://sites.google.com/view/purduelife/home?authuser=0'>정착가이드</Link></li>
                <li><Link className='text-boilermaker-gold' href='https://lists.purdue.edu/mailman/listinfo/pka'>PKA 메일링 리스트 구독하기</Link></li>
                <li><Link className='text-boilermaker-gold' href='https://open.kakao.com/o/gRpAICnf'>2023 Purdue 한인 신입생 오픈 단체 카톡방</Link></li>
                <Image alt='2023kakaoqr' src='/2023kakaoqr.png' width='300' height='300'></Image>
            </ul>

            <hr />

            <h1 className='my-8 text-3xl'>PKA 한인 동아리</h1>
            <ul className='list-disc'>
                <li>PKA - <Link className='underline text-boilermaker-gold' href='/2022-2023-PKA-1.pdf'>[PPT]</Link></li>
                <li>Korebaps - <Link className='underline text-boilermaker-gold' href='/Korebaps-1.pdf'>[PPT]</Link></li>
                <li>KSEA - <Link className='underline text-boilermaker-gold' href='/KSEA-2.pdf'>[PPT]</Link></li>
                <li>KUSA - <Link className='underline text-boilermaker-gold' href='/KUSA-1.pdf'>[PPT]</Link></li>
                <li>PKFC - <Link className='underline text-boilermaker-gold' href='/PKFC-1.pdf'>[PPT]</Link></li>
                <li>PKTC - <Link className='underline text-boilermaker-gold' href='/PKTC-1.pdf'>[PPT]</Link></li>
                <li>작은불꽃 - <Link className='underline text-boilermaker-gold' href='/작은불꽃-1.pdf'>[PPT]</Link></li>
                <li>퍼듀제자감리교회 - <Link className='underline text-boilermaker-gold' href='/퍼듀제자감리교회.pdf'>[PPT]</Link></li>

            </ul>


        </div>
    )
}