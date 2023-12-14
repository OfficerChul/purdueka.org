import { CommentsForPost, CreatePostRequestDto, CreatePostResponseDto, ReadOnePostResponseDto, UpdatePostRequestDto } from "./post.dto";

export type ReadHousingRequestDto = {}
export type ReadHousingResponseDto = {}

export type CommentsForHousing = CommentsForPost
export type ReadOneHousingResponseDto = ReadOnePostResponseDto
export type CreateHousingRequestDto = CreatePostRequestDto
export type UpdateHousingRequestDto = UpdatePostRequestDto
export type CreateHousingResponseDto = CreatePostResponseDto
