'use client';

import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import _api from "app/_api";
import { useRouter } from "next/navigation";

const ReactQuill = dynamic(
  () => import('react-quill'),
  { ssr: false }
)


export default function Page() {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const router = useRouter()
  const done = async () => {
    const { postId } = await _api.career.create({
      title,
      value,
    })
    router.push(`/career/${postId}`)
  }
  const cancel = () => router.push(`/career`)
  return <div>
    <div>
      <div className='text-yellow-600 text-2xl mt-4'>글쓰기 - 채용공고</div>
      <div className="mt-4">
        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post Title</label>
        <input onChange={e => setTitle(e.target.value)} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
    </div>
    <div>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
    </div>
    <div className="mt-4">      
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">Upload file(s) or image(s)</label>
      <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple />
    </div>
    <div className="mt-4 flex space-x-2">
      <div className="grow"></div>
      <button onClick={() => done()} className="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded">
          작성완료
      </button>
      <button onClick={cancel} className="bg-stone-400 hover:bg-stone-600 text-white font-bold py-2 px-4 rounded">
        취소
      </button>
    </div>
  </div>
}