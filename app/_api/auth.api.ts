import { AuthRequestDTO, AuthResponseDTO } from "app/_dto/auth.dto"
import axios from "axios"
import { getBearerToken, saveBearerToken } from "./token"

const baseurl = process.env.NEXT_PUBLIC_API_BASEURL
const endpoint = `${baseurl}/auth`

async function signin(dto: AuthRequestDTO): Promise<boolean> {
  try {
    const res = (await axios.post(`${endpoint}/login`, dto))?.data as AuthResponseDTO
    saveBearerToken(res.access_token)
    return true
  } catch (e) {
    return false
  }
}

async function whoami() {
  const token = getBearerToken()
  const res = await axios.get(`${endpoint}/profile`, {
    headers: { Authorization: `Bearer ${token}`}
  })
  console.log(res?.data)
}


export default {
  signin,
  whoami
}