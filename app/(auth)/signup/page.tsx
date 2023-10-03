export default async function Page() {
    return (
      <div className="bg-stone-400 flex justify-center min-h-screen">
        <div className="w-[580px] mx-auto bg-white my-20">
            <div className="p-16">
                <h1 className="text-yellow-600 text-2xl font-semibold mb-8">Sign Up</h1>
                <label htmlFor="email" className="text-xl text-boilermaker-gold">Email</label>
                <div className="flex bg-gray-200 w-full rounded-full p-1 border border-boilermaker-gold border-2 mt-2 mb-8">
                    <input id="email" type="email" placeholder="이메일" className="w-full rounded-full bg-gray-200 focus:outline-none p-2 ps-4 truncate" />
                </div>
                <label htmlFor="firstname" className="text-xl text-boilermaker-gold">First Name</label>
                <div className="flex bg-gray-200 w-full rounded-full p-1 border border-boilermaker-gold border-2 mt-2 mb-8">
                    <input id="firstname" type="text" placeholder="이름" className="w-full rounded-full bg-gray-200 focus:outline-none p-2 ps-4 truncate" />
                </div>
                <label htmlFor="lastname" className="text-xl text-boilermaker-gold">Last Name</label>
                <div className="flex bg-gray-200 w-full rounded-full p-1 border border-boilermaker-gold border-2 mt-2 mb-8">
                    <input id="lastname" type="text" placeholder="성" className="w-full rounded-full bg-gray-200 focus:outline-none p-2 ps-4 truncate" />
                </div>
                <label htmlFor="password" className="text-xl text-boilermaker-gold">Password</label>
                <div className="flex bg-gray-200 w-full rounded-full p-1 border border-boilermaker-gold border-2 mt-2 mb-8">
                    <input id="password" type="password" placeholder="비밀번호" className="w-full rounded-full bg-gray-200 focus:outline-none p-2 ps-4 truncate" />
                </div>
                <label htmlFor="confirm-pw" className="text-xl text-boilermaker-gold">Confirm Password</label>
                <div className="flex bg-gray-200 w-full rounded-full p-1 border border-boilermaker-gold border-2 mt-2 mb-8">
                    <input id="confirm-pw" type="password" placeholder="비밀번호 재입력" className="w-full rounded-full bg-gray-200 focus:outline-none p-2 ps-4 truncate" />
                </div>
                <label htmlFor="department" className="text-xl text-boilermaker-gold">Department</label>
                <div className="flex bg-gray-200 w-full rounded-full p-1 border border-boilermaker-gold border-2 mt-2 mb-8">
                    <input id="department" type="text" placeholder="e.g. Computer Science" className="w-full rounded-full bg-gray-200 focus:outline-none p-2 ps-4 truncate" />
                </div>
                <label htmlFor="description" className="text-xl text-boilermaker-gold">Description</label>
                <div className="flex bg-gray-200 w-full rounded-full p-1 border border-boilermaker-gold border-2 mt-2 mb-8">
                    <select id="description" className="w-full rounded-full bg-gray-200 focus:outline-none p-2 px-4 truncate me-2">
                        <option value="undergraduate" selected>Undergraduate</option>
                        <option value="graduate">Graduate</option>
                        <option value="post-doc">Post-doc</option>
                        <option value="research-intern">Research Intern</option>
                        <option value="exchange">Exchange</option>
                        <option value="family">Family of above</option>
                        <option value="none">None of above</option>
                        <option value="prefer-not">Prefer not to say</option>
                    </select>
                </div>
                <div className="flex justify-center">
                    <button className="w-44 bg-boilermaker-gold text-white p-4 rounded-full min-w-fit mt-4 drop-shadow-md">회원가입</button>
                </div>
            </div>
        </div>
      </div>
    )
}