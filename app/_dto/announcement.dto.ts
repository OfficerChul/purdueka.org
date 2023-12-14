export type ReadAnnouncementRequestDto = {}
export type ReadAnnouncementResponseDto = {}

export type CommentsForAnnouncement = {
  id: number;
  content: string;
  authorId: number;
  author: string;
  isReply: boolean;
  createdAt: Date;
  modifiedAt?: Date;
}

export type ReadOneAnnouncementResponseDto = {
  id: number
  title: string
  author: string
  authorId: number
  content: string
  comments: CommentsForAnnouncement[]
  createdAt: Date
}
export type CreateAnnouncementRequestDto = {
  title: string;
  value: string;
}
export type UpdateAnnouncementRequestDto = {
  title: string;
  value: string;
}
export type CreateAnnouncementResponseDto = {
  postId: number;
}
