import { CreateHousingRequestDto, CreateHousingResponseDto, ReadOneHousingResponseDto, UpdateHousingRequestDto } from "app/_dto/housing.dto"
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
const endpoint = `${baseurl}/housing`

async function getOne(id: string): Promise<ReadOneHousingResponseDto> {
  return (await axios.get(`${endpoint}/${id}`)).data as ReadOneHousingResponseDto
}

async function create(dto: CreateHousingRequestDto): Promise<CreateHousingResponseDto> {
  return (await axios.post(`${endpoint}`, dto)).data as CreateHousingResponseDto
}

async function getAll(dto: ReadAllRequestDto): Promise<ReadAllResponseDto> {
  return (await axios.get(`${endpoint}`, { params: dto })).data as ReadAllResponseDto
}

async function remove(id: number) {
  await axios.delete(`${endpoint}/${id}`)
}

async function update(id: number, dto: UpdateHousingRequestDto) {
  await axios.put(`${endpoint}/${id}`, dto)
}


export default {
  getOne,
  create,
  getAll,
  update,
  remove,
}