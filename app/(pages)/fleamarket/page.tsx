"use client"

import { useEffect, useState } from 'react'
import Board from '../../_components/board/board'
import _api from 'app/_api'
import { ReadAllResponseDto } from 'app/_dto/readAll.dto'
import Pagination from 'app/_components/pagination/pagination'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const [isLoading, setLoading] = useState(true)
  const [list, setList] = useState({} as ReadAllResponseDto)
  /* ?page=3 */
  const searchParams = useSearchParams()
  const currentPage = +(searchParams.get("page") || 1);
  const pageSize = 10;
  useEffect(() => { 
    _api.fleamarket.getAll({ page: currentPage, pageCount: pageSize })
      ?.then(e => setList(e))
      ?.finally(() => setLoading(false))
  }, [currentPage])


  if (isLoading) return <p>Loading...</p>
  if (!list) return <p>No data</p>

  return (
    <div>
      <Board baseUrl="fleamarket" title="사고팔고" data={list.data} />
      <Pagination
        items={list.totalDataNumber}
        currentPage={currentPage}
        pageSize={pageSize}
        totalDataNumber={list.totalDataNumber}
        OnPageChange={e => router.push(`/fleamarket?page=${e}`)} />
    </div>
  )
}