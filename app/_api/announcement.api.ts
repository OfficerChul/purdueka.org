import { CreateAnnouncementRequestDto, CreateAnnouncementResponseDto, ReadOneAnnouncementResponseDto } from "app/_dto/announcement.dto"
import axios from "axios"
import { getBearerToken } from "./token";

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

async function createAnnouncement(dto: CreateAnnouncementRequestDto): Promise<CreateAnnouncementResponseDto> {
  return (await axios.post(`${endpoint}`, dto)).data as CreateAnnouncementResponseDto
}

export default {
  getOne,
  createAnnouncement,
}