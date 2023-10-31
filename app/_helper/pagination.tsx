import { BoardResponseDTO } from '../_dto/board.dto'

export const paginate = (data: BoardResponseDTO[], pageNum: number, pageSize: number) => {
    const startIndex = (pageNum - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
}