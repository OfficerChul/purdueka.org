export const paginate = (data: any[], pageNum: number, pageSize: number) => {
    const startIndex = (pageNum - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
}