import { CreateCareerRequestDto, CreateCareerResponseDto, ReadOneCareerResponseDto, UpdateCareerRequestDto } from "app/_dto/career.dto"
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
const endpoint = `${baseurl}/career`
// const endpoint = `http://localhost:4000/announcements`

async function getOne(id: string): Promise<ReadOneCareerResponseDto> {
  return (await axios.get(`${endpoint}/${id}`)).data as ReadOneCareerResponseDto
}

async function create(dto: CreateCareerRequestDto): Promise<CreateCareerResponseDto> {
  return (await axios.post(`${endpoint}`, dto)).data as CreateCareerResponseDto
}

async function getAll(dto: ReadAllRequestDto): Promise<ReadAllResponseDto> {
  return (await axios.get(`${endpoint}`, { params: dto })).data as ReadAllResponseDto
}

async function remove(id: number) {
  await axios.delete(`${endpoint}/${id}`)
}

async function update(id: number, dto: UpdateCareerRequestDto) {
  await axios.put(`${endpoint}/${id}`, dto)
}


export default {
  getOne,
  create,
  getAll,
  update,
  remove,
}