export type ReadAnnouncementRequestDto = {}
export type ReadAnnouncementResponseDto = {}

export type CommentsForAnnouncement = {
  id: number;
  content: string;
  author: string;
  isReply: boolean;
  createdAt: Date;
  modifiedAt?: Date;
}

export type ReadOneAnnouncementResponseDto = {
  id: number
  title: string
  author: string
  content: string
  comments: CommentsForAnnouncement[]
  createdAt: Date
}
export type CreateAnnouncementRequestDto = {
  title: string;
  value: string;
}
export type CreateAnnouncementResponseDto = {
  postId: number;
}
