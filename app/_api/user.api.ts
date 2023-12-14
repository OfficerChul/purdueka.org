import { EmailDupCheckRequestDTO, EmailDupCheckResponseDTO, SignupRequestDTO } from "app/_dto/user.dto"
import axios from "axios"

const baseurl = process.env.NEXT_PUBLIC_API_BASEURL
const endpoint = `${baseurl}/users`

async function doesEmailExist(dto: EmailDupCheckRequestDTO): Promise<boolean> {
  try {
    const res = (await axios.get(`${endpoint}/email-dup-check`, { params: dto } )).data as EmailDupCheckResponseDTO
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


export default {
  signup,
  doesEmailExist,
}