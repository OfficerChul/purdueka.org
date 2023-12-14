'use client'

import _api from 'app/_api'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Progress } from 'flowbite-react'

export default function Verify({ params }: { params: { uuid: string } }) {

    const router = useRouter()
    useEffect(() => {
        _api.user.verify(params.uuid)

        setTimeout(() => {
            router.push('/')
        }, 3000)

    }, [])
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    clearInterval(timer);
                    return 100;
                }
                return Math.min(oldProgress + 10, 100); // 3번에 나눠서 33%씩 증가
            });
        }, 300); // 1초마다 증가

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screenpx-4 py-8">
            <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="font-semibold text-xl">Verification Process</h2>
                </div>
                <div className="p-4">
                    <p className="mb-8 text-gray-600">
                        정보 확인을 위해 잠시만 기다려 주십시오. <br />
                        약 3초가 소요될 예정입니다.

                    </p>
                    <div className="relative pt-1">
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-boilermaker-gold">

                            <Progress progress={100} />
                            <div
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-black transition-all duration-3000"
                                style={{
                                    width: `${progress}%`,
                                }}
                            />

                        </div>
                    </div>

                </div>
            </div>
            <div className="mt-8 text-center text-sm">
                도움이 필요하시면, 지원팀으로 문의하세요.
                <Link className="underline" href="/contact">
                     Contact Support
                </Link>
            </div>
        </div>
    )

}