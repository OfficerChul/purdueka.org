
export type ReadAllUnit = {
  id: number;
  title: string;
  author: string;
  date: Date;
  view: number;
}

export type ReadAllResponseDto = {
  page: number;
  pageCount: number;
  totalDataNumber: number;

  data: ReadAllUnit[];
}

export type ReadAllRequestDto = {
  page: number;
  pageCount: number;
}