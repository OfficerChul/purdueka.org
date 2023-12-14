import { CommentsForPost, CreatePostRequestDto, CreatePostResponseDto, ReadOnePostResponseDto, UpdatePostRequestDto } from "./post.dto";

export type ReadAnnouncementRequestDto = {}
export type ReadAnnouncementResponseDto = {}

export type CommentsForAnnouncement = CommentsForPost
export type ReadOneAnnouncementResponseDto = ReadOnePostResponseDto
export type CreateAnnouncementRequestDto = CreatePostRequestDto
export type UpdateAnnouncementRequestDto = UpdatePostRequestDto
export type CreateAnnouncementResponseDto = CreatePostResponseDto
