import api from "app/_api/"
import Comment from "app/_components/comment/comment"

export default async function Page({ params }: { params: { id: string } }) {
    const res = await api.announcement.getOne(params.id)
   
    return (
        <div className="mt-10">
            <hr className="bg-boilermaker-gold w-1/3 h-2 my-4" />
            <div className="flex justify-between">
                <div className='text-2xl'>공지사항</div>
                <div className='flex'>
                <div className='flex items-center border border-black text-gray-900 text-sm w-56 px-2'>
                    <input type="text" id="first_name" className="focus:outline-none w-full" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                <button className="bg-boilermaker-gold ms-4 py-2 px-4">글쓰기</button>
                </div>
            </div>
            <div className="p-2 mt-6">
                <div className="flex flex-col lg:flex-row justify-between">
                    <h1 className="text-4xl text-boilermaker-gold font-medium">
                        {res.title}
                    </h1>
                    <div className="flex items-end">
                        <div className="pe-2">작성자<span className="ms-2 font-light">{res.author}</span></div>
                        <div className="px-2">조회수<span className="ms-2 font-light">200</span></div>
                        <div className="ps-2">댓글<span className="ms-2 font-light">{res.id}</span></div>
                    </div>
                </div>
                <div className="text-end text-boilermaker-gold font-medium mt-3 mb-10">{res.createdAt.toLocaleString('en-us')}</div>
                <div dangerouslySetInnerHTML={{__html: res.content}}>
                </div>
                <div className="mt-10 mx-20">
                    <div className="">
                        <textarea className="w-full h-24 border border-black resize-none focus:outline-none p-3" placeholder="댓글을 입력해주세요"></textarea>
                        <div className="flex justify-end">
                            <button className="bg-boilermaker-gold py-2 px-4">댓글달기</button>
                        </div>
                    </div>
                    <div>
                        <p>전체댓글수 <span>2</span></p>
                        <hr className="border-black my-4" />
                        <div id="comments">
                            {
                                res.comments.map(e => <Comment key={e.id} editor={e.author} date={e.createdAt.toLocaleString('en-us')} content={e.content} isLiked={false} isReply={false} />)
                            }
                            <Comment editor="iilhun_" date="2023/10/10" content="댓글 내용" isLiked={true} isReply={false} />
                            <Comment editor="iilhun_" date="2023/10/10" content="댓글 내용" isLiked={false} isReply={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}