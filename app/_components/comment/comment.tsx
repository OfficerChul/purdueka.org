"use client"

import _api from 'app/_api';
import { UserRole } from 'app/_dto/auth.dto';
import { hasLoggedIn } from 'app/_helper/lib';
import { Dropdown } from 'flowbite-react';
import { useState } from 'react';

export default function Comment(props: { id: number, authorId: number, editor: string, date: string, content: string, isLiked: boolean, isReply: boolean }) {
  const { editor, date, content, isLiked, isReply } = props;
  const user = _api.auth.whoami();
  const [isLikedState, setIsLikedState] = useState(isLiked);
  const [deleted, setIsDeleted] = useState(false);
  const handleDelete = () => {
    _api.comment.remove(props.id)
    setIsDeleted(true)
  }
  return (
    <div className={deleted ? "hidden" : "block"}>
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
        {
          hasLoggedIn(user) &&
          (user.role === UserRole.ADMIN || user.id === props.authorId) &&
          <div className="flex flex-none">
            <div className="ps-2">
              <Dropdown label="" placement="right-start" renderTrigger={() =>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
              }>
                <Dropdown.Item>수정</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDelete()}>삭제</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        }
      </div>
    </div>
    </div>
  )
}