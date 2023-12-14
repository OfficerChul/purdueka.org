import { CreateAnnouncementRequestDto, CreateAnnouncementResponseDto, ReadOneAnnouncementResponseDto, UpdateAnnouncementRequestDto } from "app/_dto/announcement.dto"
import axios from "axios"
import { getBearerToken } from "./token";
import { ReadAllRequestDto, ReadAllResponseDto } from "app/_dto/readAll.dto";

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
const endpoint = `${baseurl}/announcements`
// const endpoint = `http://localhost:4000/announcements`

async function getOne(id: string): Promise<ReadOneAnnouncementResponseDto> {
  return (await axios.get(`${endpoint}/${id}`)).data as ReadOneAnnouncementResponseDto
}

async function create(dto: CreateAnnouncementRequestDto): Promise<CreateAnnouncementResponseDto> {
  return (await axios.post(`${endpoint}`, dto)).data as CreateAnnouncementResponseDto
}

async function getAll(dto: ReadAllRequestDto): Promise<ReadAllResponseDto> {
  return (await axios.get(`${endpoint}`, { params: dto })).data as ReadAllResponseDto
}

async function remove(id: number) {
  await axios.delete(`${endpoint}/${id}`)
}

async function update(id: number, dto: UpdateAnnouncementRequestDto) {
  await axios.put(`${endpoint}/${id}`, dto)
}


export default {
  getOne,
  create,
  getAll,
  update,
  remove,
}