import { AuthRequestDTO, AuthResponseDTO } from "app/_dto/auth.dto"
import axios from "axios"
import { getBearerToken, saveBearerToken } from "./token"
import { UserRole, saveGlobal } from "./global"

const baseurl = process.env.NEXT_PUBLIC_API_BASEURL
const endpoint = `${baseurl}/auth`

axios.defaults.headers['Cache-Control'] = 'no-cache'
axios.defaults.headers['Pragma'] = 'no-cache'
axios.defaults.headers['Expires'] = '0'

async function signin(dto: AuthRequestDTO): Promise<boolean> {
  console.log(endpoint)
  try {
    const res = (await axios.post(`${endpoint}/login`, dto))?.data as AuthResponseDTO
    saveBearerToken(res.access_token)
    saveGlobal({
      email: res.email,
      name: res.name,
      role: res.role,
      hasLoggedIn: true,
    })
    return true
  } catch (e) {
    return false
  }
}

function signout() {
  saveBearerToken("")
  saveGlobal({
    email: "",
    name: "",
    role: undefined,
    hasLoggedIn: false,
  })
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
  signout,
  whoami,
}