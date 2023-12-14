"use client"

import _api from "app/_api/"
import Comment from "app/_components/comment/comment"
import { ReadOneHousingResponseDto } from "app/_dto/housing.dto"
import { hasLoggedIn } from "app/_helper/lib"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Page({ params }: { params: { id: string } }) {
  const [data, setData] = useState({} as ReadOneHousingResponseDto)
  const [isLoading, setLoading] = useState(true)
  const [comment, setComment] = useState("")
  const router = useRouter()
  const user = _api.auth.whoami()

  const submitComment = async () => {
    if (comment.trim().length === 0) {
      return
    }
    await _api.comment.create({
      content: comment,
      postId: +params.id,
    })
    setComment("")
    _api.housing.getOne(params.id)
      .then(e => setData(e))
      .finally(() => setLoading(false))
  }

  const handleRemove = () => {
    const yes = confirm("정말 삭제하시겠습니까?")
    if (yes) {
      _api.housing.remove(data.id)
      router.push("/housing")
    }
  }

  useEffect(() => {
    _api.housing.getOne(params.id)
      .then(e => setData(e))
      .finally(() => setLoading(false))
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  return (
    <div className="mt-10">
      <hr className="bg-boilermaker-gold w-1/3 h-2 my-4" />
      <div className="flex justify-between">
        <div className='text-2xl'><Link href="/housing">렌트/룸메</Link></div>
        {
          hasLoggedIn(user) &&
          data.authorId === user.id &&
          <div className='flex'>
            <button onClick={() => router.push(`/housing/${params.id}/edit`)} className="bg-boilermaker-gold ms-4 py-2 px-4">수정하기</button>
            <button onClick={() => handleRemove()} className="bg-boilermaker-gold ms-4 py-2 px-4">삭제하기</button>
          </div>
        }
      </div>
      <div className="p-2 mt-6">
        <div className="flex flex-col lg:flex-row justify-between">
          <h1 className="text-4xl text-boilermaker-gold font-medium">
            {data.title}
          </h1>
          <div className="flex items-end">
            <div className="pe-2">작성자<span className="ms-2 font-light">{data.author}</span></div>
            {/* <div className="px-2">조회수<span className="ms-2 font-light">200</span></div> */}
            <div className="ps-2">댓글<span className="ms-2 font-light">{data.comments.length}개</span></div>
          </div>
        </div>
        <div className="text-end text-boilermaker-gold font-medium mt-3 mb-10">{(new Date(data.createdAt)).toLocaleString('ko-KR')}</div>
        <div dangerouslySetInnerHTML={{ __html: data.content }}>
        </div>
        <div className="mt-10">
          {
            hasLoggedIn(user) &&
            <div >
              <textarea value={comment} onChange={e => setComment(e.target.value)} className="w-full h-24 border border-black resize-none focus:outline-none p-3" placeholder="댓글을 입력해주세요"></textarea>
              <div className="flex justify-end">
                <button onClick={submitComment} className="bg-boilermaker-gold py-2 px-4">댓글달기</button>
              </div>
            </div>
          }
          <div>
            <p>전체댓글수 <span>{data.comments.length}</span></p>
            <hr className="border-black my-4" />
            <div id="comments">
              {
                data.comments.map(e => <Comment key={e.id} id={e.id} authorId={e.authorId} editor={e.author} date={(new Date(e.createdAt)).toLocaleString('ko-KR')} content={e.content} isLiked={false} isReply={e.isReply} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}