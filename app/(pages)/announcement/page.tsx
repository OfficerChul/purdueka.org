import Board from '../../_components/board/board'
import Miniboard from '../../_components/miniboard/miniboard'
import { data } from '../../_shared/tests/test_data'

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <Board baseUrl="announcement" title="공지사항" data={data} />
    </div>
  )
}