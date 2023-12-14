export type CreateCommentRequestDto = {
  postId: number;
  parentId?: number;
  content: string;
}

export type CreateCommentResponseDto = {
  commentId: number;
}
