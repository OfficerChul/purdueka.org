import { getOne } from "app/_api/announcement.api"

export default async function Page({ params }: { params: { id: string } }) {
    const res = await getOne(params.id)
    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex justify-between mt-10">
                <div className='text-yellow-600 text-2xl'>공지사항</div>
                <div>
                    <input type="text" id="first_name" className="border border-black text-gray-900 text-sm block w-full p-2.5" placeholder="검색하세요." />
                </div>
            </div>
            <div className="p-2 mt-14">
                <div className="flex flex-col lg:flex-row justify-between">
                    <h1 className="text-4xl text-boilermaker-gold">
                        {res.title}
                    </h1>
                    <div className="flex items-end text-boilermaker-gold">
                        <div className="pe-2"><span className="text-yellow-600">작성자</span>{res.author}</div>
                        <div className="px-2"><span className="text-yellow-600">조회수</span>todo</div>
                        <div className="px-2"><span className="text-yellow-600">댓글</span>{res.id}</div>
                        <div className="ps-2">{res.createdAt.toString()}</div>
                    </div>
                </div>
                <hr className="border border-stone-400 h-0 my-8" />
                <div dangerouslySetInnerHTML={{__html: res.content}}>
                </div>
            </div>
        </div>
    )
}