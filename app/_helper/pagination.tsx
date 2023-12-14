import { Key } from 'react';
import { BoardResponseDTO } from '../_dto/board.dto'

export const paginate = (data: BoardResponseDTO[], pageNum: number, pageSize: number) => {
    const startIndex = (pageNum - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
}

export const generatePageIndexArray = (pagesCount: number): number[] => {
    let pages: number[] = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }

    return pages;
}