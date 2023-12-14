import { CreateFleamarketRequestDto, CreateFleamarketResponseDto, ReadOneFleamarketResponseDto, UpdateFleamarketRequestDto } from "app/_dto/fleamarket.dto"
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
const endpoint = `${baseurl}/fleamarket`

async function getOne(id: string): Promise<ReadOneFleamarketResponseDto> {
  return (await axios.get(`${endpoint}/${id}`)).data as ReadOneFleamarketResponseDto
}

async function create(dto: CreateFleamarketRequestDto): Promise<CreateFleamarketResponseDto> {
  return (await axios.post(`${endpoint}`, dto)).data as CreateFleamarketResponseDto
}

async function getAll(dto: ReadAllRequestDto): Promise<ReadAllResponseDto> {
  return (await axios.get(`${endpoint}`, { params: dto })).data as ReadAllResponseDto
}

async function remove(id: number) {
  await axios.delete(`${endpoint}/${id}`)
}

async function update(id: number, dto: UpdateFleamarketRequestDto) {
  await axios.put(`${endpoint}/${id}`, dto)
}


export default {
  getOne,
  create,
  getAll,
  update,
  remove,
}