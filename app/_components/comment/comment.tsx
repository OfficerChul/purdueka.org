"use client"

import { Dropdown } from 'flowbite-react';
import { useState } from 'react';

export default function Comment(props: {editor: string, date: string, content: string, isLiked: boolean, isReply: boolean}) {
    const { editor, date, content, isLiked, isReply } = props;
    const [isLikedState, setIsLikedState] = useState(isLiked);
    return (
        <div className={isReply ? 'ml-16 mb-4' : 'mb-4'}>
            <div className="flex">
                <div className="flex-none w-12 h-12 bg-boilermaker-gold rounded-full"></div>
                <div className="flex flex-col ml-4 grow">
                    <div className="flex">
                        <div className="text-sm font-medium">{editor}</div>
                        <div className="text-sm ms-4 text-stone-400 font-light align-bottom">{date}</div>
                    </div>
                    <div className="p-2">
                        <p>{content}</p>
                    </div>
                </div>
                <div className="flex flex-none">
                    {/* <div className="px-2">
                        {
                            isLikedState ? 
                            <svg onClick={() => setIsLikedState(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 cursor-pointer">
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg> :
                            <svg onClick={() => setIsLikedState(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        }
                    </div> */}
                    <div className="ps-2">
                    <Dropdown label="" placement="right-start" renderTrigger={() => 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>
                    }>
                        <Dropdown.Item>수정</Dropdown.Item>
                        <Dropdown.Item>삭제</Dropdown.Item>
                    </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    )
}