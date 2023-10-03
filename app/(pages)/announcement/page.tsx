import Board from '../../_components/board/board'
import Miniboard from '../../_components/miniboard/miniboard'
import { data } from '../../_shared/test_data'

export default async  function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <Board category="공지사항" data={data} />
      <div className='m-4 sm:hidden'>
        <Miniboard category="공지사항" data={data} />
      </div>
    </div>
  )
}