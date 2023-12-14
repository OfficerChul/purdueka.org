import React from 'react'
import { BoardResponseDTO } from '../../_dto/board.dto'
import { paginate } from 'app/_helper/pagination';
import Link from 'next/link';

export default function Miniboard(props: { baseUrl: string, title: string, data: Array<BoardResponseDTO> }) {
  const { baseUrl, title, data } = props;
  const numOfPosts = 10;
  const paginatedPosts = paginate(data, 1, numOfPosts);

  return (
    <div className="flex justify-center bg-boilermaker-gold">
      <div className="flex overflow-hidden flex-col text-black border-8 border-white w-full mt-1 bg-white">
        <div className="flex justify-between mb-4">
          <span className="text-xl">{title}</span>
          <a className='text-xs' href={`/${baseUrl}`}>더보기</a>
        </div>
        {
          paginatedPosts.map( 
            e =>
            <div key={e.id} className='flex justify-between items-center'>
              <Link className='hover:text-stone-400' href={`/${baseUrl}/${e.id}`}>{e.title}</Link>
              <span className='text-stone-400 text-xs'>{(new Date(e.date)).toLocaleDateString()}</span>
            </div>
          )
        }
          
      </div>
    </div>

  )
}
