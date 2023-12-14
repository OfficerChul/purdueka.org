export type CommentsForPost = {
  id: number;
  content: string;
  authorId: number;
  author: string;
  isReply: boolean;
  createdAt: Date;
  modifiedAt?: Date;
}

export type ReadOnePostResponseDto = {
  id: number
  title: string
  author: string
  authorId: number
  content: string
  comments: CommentsForPost[]
  createdAt: Date
}
export type CreatePostRequestDto = {
  title: string;
  value: string;
}
export type UpdatePostRequestDto = {
  title: string;
  value: string;
}
export type CreatePostResponseDto = {
  postId: number;
}
