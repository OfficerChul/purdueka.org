export type ReadAnnouncementRequestDto = {}
export type ReadAnnouncementResponseDto = {}

export type CommentsForAnnouncement = {
  id: number;
  content: string;
  author: string;
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