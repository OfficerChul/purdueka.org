import { CommentsForPost, CreatePostRequestDto, CreatePostResponseDto, ReadOnePostResponseDto, UpdatePostRequestDto } from "./post.dto";

export type ReadCareerRequestDto = {}
export type ReadCareerResponseDto = {}

export type CommentsForCareer = CommentsForPost
export type ReadOneCareerResponseDto = ReadOnePostResponseDto
export type CreateCareerRequestDto = CreatePostRequestDto
export type UpdateCareerRequestDto = UpdatePostRequestDto
export type CreateCareerResponseDto = CreatePostResponseDto
