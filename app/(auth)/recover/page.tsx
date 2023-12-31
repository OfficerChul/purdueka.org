export default async function Page() {
    return (
      <div className="bg-stone-400 flex justify-center h-screen">
        <div className="w-[580px] m-auto bg-white">
            <form className="p-16" action="#" method="post" >
                <h1 className="text-yellow-600 text-2xl font-semibold mb-8">Recover Account</h1>
                <div className="flex bg-gray-200 w-full rounded-full p-1 border border-boilermaker-gold border-2 my-4">
                    <input type="email" name="email" placeholder="이메일을 입력해주세요" className="w-full rounded-full bg-gray-200 focus:outline-none p-2 ps-4 truncate" />
                </div>
                <div className="flex justify-center">
                    <input type="submit" className="w-44 bg-boilermaker-gold text-white p-4 rounded-full min-w-fit mt-8 drop-shadow-md" value="비밀번호 초기화" />
                </div>
            </form>
        </div>
      </div>
    )
}