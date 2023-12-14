import Link from 'next/link';

export default function Page() {

    return (
        <>
            <div className="z-20 absolute left-1/2 transform -translate-x-1/2 items-center top-40 text-boilermaker-gold bg-black bg-opacity-80 rounded-3xl p-20 lg:w-[480px] lg:h-[400px] 2xl:w-[527px] 2xl:h-[500px] flex justify-center flex-col gap-4">
                <Link href={"/"} className='absolute top-7 right-7'>{x_mark}</Link>
                <h1 className='text-4xl text-boilermaker-gold pb-4 absolute top-16'>회원가입 완료</h1>
                <div className="text-2xl text-white">회원가입이 완료되셨습니다.</div>
                <div className="text-md text-white">계정 인증을 위해 귀하의 이메일을 확인해 주세요.</div>
                <Link href={"/"} className='border-2 border-boilermaker-gold relative top-10 w-full cursor-pointer bg-boilermaker-gold h-9 hover:bg-yellow-600 text-white p-4 rounded-lg drop-shadow-md flex justify-center items-center'>
                        확인
                </Link>
            </div>
        </>
    );
}


const x_mark = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
