import Header from './layout'

const data = [
  {
    id: 1,
    title: "asdfs",
    date: "asdf",
    author: "ffff",
    views: 4,
  },
  {
    id: 2,
    title: "asdfs",
    date: "asdf",
    author: "ffff",
    views: 4,
  },
  {
    id: 3,
    title: "asdfs",
    date: "asdf",
    author: "ffff",
    views: 4,
  }
]

export default async  function Page({ params }: { params: { id: string } }) {
  return <div>
    <div className="flex justify-between mt-10">
      <div className='text-yellow-600 text-2xl'>공지사항</div>
      <div>
        {/* <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label> */}
        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
      </div>
    </div>
    <div className="mt-4 flex justify-end">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
    <div className='mt-4 border border-y-indigo-500'>
      <div>
        <table className='text-black w-100'>
          <thead>
            <tr className='w-full'>
              <th>Number</th>
              <th className="w-full">Title</th>
              <th>Date</th>
              <th>Author</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Notice</td>
              <td>2023년 기묘한 밤 ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ</td>
              <td>1 시간 전</td>
              <td>PKA</td>
              <td>30</td>
            </tr>
            {
              data.map(e => <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.date}</td>
                <td>{e.author}</td>
                <td>{e.views}</td>
              </tr>
                )
            }
          </tbody>
        </table>
      </div>
      <div className='flex'>
        <div className="grow"></div>
        <p className='text-black'>{"< Prev 1 2 3 Next >"}</p>
        <div className="grow"></div>
      </div>
    </div>
  </div>
}