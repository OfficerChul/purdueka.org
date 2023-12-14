import { CreateAnnouncementRequestDto, CreateAnnouncementResponseDto, ReadOneAnnouncementResponseDto } from "app/_dto/announcement.dto"
import axios from "axios"
import { getBearerToken } from "./token";
import { ReadAllRequestDto, ReadAllResponseDto } from "app/_dto/readAll.dto";
import { CreateCommentRequestDto, CreateCommentResponseDto } from "app/_dto/comment.dto";

axios.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer ${getBearerToken()}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const baseurl = process.env.NEXT_PUBLIC_API_BASEURL
const endpoint = `${baseurl}/comments`
// const endpoint = `http://localhost:4000/announcements`

async function getOne(id: string): Promise<ReadOneAnnouncementResponseDto> {
  return (await axios.get(`${endpoint}/${id}`)).data as ReadOneAnnouncementResponseDto
}

async function create(dto: CreateCommentRequestDto): Promise<CreateCommentResponseDto> {
  return (await axios.post(`${endpoint}`, dto)).data as CreateCommentResponseDto
}

async function remove(id: number) {
  await axios.delete(`${endpoint}/${id}`)
}


export default {
  getOne,
  create,
  remove,
}