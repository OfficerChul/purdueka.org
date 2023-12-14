import { AllUserDataResponseDTO, DeleteUserDataResponseDTO, RestoreUserDataResponseDTO, EmailDupCheckRequestDTO, EmailDupCheckResponseDTO, SignupRequestDTO } from "app/_dto/user.dto"
import axios from "axios"

const baseurl = process.env.NEXT_PUBLIC_API_BASEURL
const endpoint = `${baseurl}/users`

async function doesEmailExist(dto: EmailDupCheckRequestDTO): Promise<boolean> {
  try {
    const res = (await axios.get(`${endpoint}/email-dup-check`, { params: dto })).data as EmailDupCheckResponseDTO
    return res.isDuplicated
  } catch (e) {
    return true
  }
}

async function signup(dto: SignupRequestDTO): Promise<boolean> {
  try {
    await axios.post(`${endpoint}/signup`, dto)
    return true
  } catch (e) {
    return false
  }
}

async function verify(key: string) {
  await axios.get(`${endpoint}/verify/${key}`);
}

async function getAllUsers(page: number = 1, pageCount: number = 10): Promise<AllUserDataResponseDTO> {
  try {
    const res = (await axios.get(`${endpoint}/all`, { params: {page, pageCount}})).data as AllUserDataResponseDTO
    return res
  } catch (e) {
    throw e
  }
}

async function deleteUser(id: string): Promise<DeleteUserDataResponseDTO> {
  try {
    return await axios.delete(`${endpoint}/${id}`)
  } catch (e) {
    throw e 
  }
}

async function restoreUser(id: string): Promise<RestoreUserDataResponseDTO> {
  try {
    return await axios.post(`${endpoint}/restore/${id}`)
  } catch (e) {
    throw e 
  }
}

export default {
  signup,
  doesEmailExist,
  verify,
  getAllUsers,
  deleteUser,
  restoreUser
}