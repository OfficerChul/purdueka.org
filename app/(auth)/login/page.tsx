"use client"
import api from 'app/_api'
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default async function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()
  const handleSubmit = () => {
    api.auth.signin({ email, password })
    router.push('/')
  }
  const handleWhoami = () => {
    api.auth.whoami()
  }
  return (
    <div className="bg-stone-400 flex justify-center h-screen">
      <div className="w-[580px] m-auto bg-white">
        <form className="p-16" action="#" method="post" >
          <h1 className="text-yellow-600 text-2xl font-semibold mb-8">Login</h1>
          <div className="flex bg-gray-200 w-full rounded-full p-1 border border-boilermaker-gold border-2 my-4">
            <input type="email" onChange={e => setEmail(e.target.value)} name="email" placeholder="이메일" className="w-full rounded-full bg-gray-200 focus:outline-none p-2 ps-4 truncate" />
          </div>
          <div className="flex bg-gray-200 w-full rounded-full p-1 border border-boilermaker-gold border-2 my-4">
            <input type="password" onChange={e => setPassword(e.target.value)} name="password" placeholder="비밀번호" className="w-full rounded-full bg-gray-200 focus:outline-none p-2 ps-4 truncate" />
          </div>
          <div>
            <a href="/recover" className="text-stone-400">계정을 잊어버리셨습니까?</a>
          </div>
          <div className="flex justify-center">
            <input type="submit" onClick={() => handleSubmit()} className="w-44 bg-boilermaker-gold text-white p-4 rounded-full min-w-fit mt-8 drop-shadow-md" value="로그인" />
          </div>
          <div className="flex justify-center">
            <Button onClick={() => handleWhoami()}>whoami</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
