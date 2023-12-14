import Link from 'next/link'

export default function Contact_Us() {
    return (
        <div className="container m-auto my-8 mt-32">
            <h1 className='text-4xl'>Contact Us</h1><br />
            <hr />

            <h1 className='mt-8 text-2xl'>PKA에 하시고 싶은 말씀이나 질문, 건의사항이 있으시면 언제든지 아래를 통하거나 이메일로 연락주십시오.</h1>
            <h1 className='text-2xl'>Let us know your suggestions, comments and concerns by sending an email.</h1>

            <ul className='list-disc my-8'>
                <li><h1>일반 문의 (general issue) : <Link className='text-boilermaker-gold' href='pka@purdueka.org'>pka@purdueka.org</Link></h1></li>
                <li><h1>리크루팅 문의 (recruiting) : <Link className='text-boilermaker-gold' href='recruiting@purdueka.org'>recruiting@purdueka.org</Link></h1></li>
                <li><h1>후원사 광고 문의 (advertising) : <Link className='text-boilermaker-gold' href='pka@purdueka.org'>pka@purdueka.org</Link></h1></li>
                <li><h1>홈페이지 문의 (website) : <Link className='text-boilermaker-gold' href='webmaster@purdueka.org'>webmaster@purdueka.org</Link></h1></li>
                <br />
                <li><h1>페이스북 페이지 (Facebook Page) : <Link className='text-boilermaker-gold' href='https://www.facebook.com/PurdueKoreanAssociation'>#PurdueKoreanAssosiation</Link></h1></li>
                <li><h1>인스타그램 페이지 (Instagram Page) : <Link className='text-boilermaker-gold' href='https://www.instagram.com/pka_boilerup'>@pka_boilerup</Link></h1></li>
                <li><h1 className='text-boildermaker-gold'>PKA 메일링 리스트 구독하기</h1></li>
                
            </ul>

            <h1 className='mt-8 text-2xl'>우편물 주소(Mailing Address)</h1>
            주소 (Address): Please contact me via Email (president@purdueka.org)

        </div>
    )
}