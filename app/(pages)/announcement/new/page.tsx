'use client';

import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(
  () => import('react-quill'),
  { ssr: false }
)


export default  function Page({ params }: { params: { id: string } }) {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('announcement');
  const done = () => {
    console.log({
      category,
      title,
      value,
    })
  }
  return <div>
    <div>
      <div className='text-yellow-600 text-2xl mt-4'>글쓰기</div>
      <div className='text-yellow-600 text-2xl mt-4'>
        <label htmlFor="catetory" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post Category</label>
        <select
          onChange={e => setCategory(e.target.value)}
          defaultValue={"announcement"} id="catetory" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="announcement">공지사항</option>
          <option value="bns">사고팔고</option>
          <option value="rnr">렌트/룸메</option>
        </select>
      </div>
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
      <button className="bg-stone-400 hover:bg-stone-600 text-white font-bold py-2 px-4 rounded">
        취소
      </button>
    </div>
  </div>
}