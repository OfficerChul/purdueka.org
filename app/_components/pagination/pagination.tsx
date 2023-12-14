import { generatePageIndexArray } from "app/_helper/pagination";

export default function Pagination(props: { items: number, pageSize: number, currentPage: number, totalDataNumber: number, OnPageChange: (_: number) => void }) {
  const { items, pageSize, currentPage, OnPageChange } = props;
  const pagesCount = Math.ceil(items / pageSize);
  const defaultState = "px-2 text-yellow-600 hover:text-black cursor-pointer"
  const selectedState = "px-2 text-black"

  const pages = generatePageIndexArray(pagesCount);

  let prevBtn = <a className='pe-2 text-yellow-600 hover:text-black cursor-pointer' onClick={() => OnPageChange(currentPage - 1)}>&lt; Prev</a>;
  let nextBtn = <a className='ps-2 text-yellow-600 hover:text-black cursor-pointer' onClick={() => OnPageChange(currentPage + 1)}>Next &gt;</a>;

  return (
    <div className='mt-4 flex justify-center'>
      {currentPage !== 1 && prevBtn}
      {pages.map((page) => (
        <a key={page} onClick={() => OnPageChange(page)} className={(currentPage === page) ? selectedState : defaultState}>{page}</a>
      ))}
      {currentPage !== pagesCount && nextBtn}
    </div>
  )
}