import { AuthRequestDTO, AuthResponseDTO } from "app/_dto/auth.dto"
import axios from "axios"
import { getBearerToken, saveBearerToken } from "./token"
import useSWR from 'swr'
import { WhoamiResponseDTO } from "app/_dto/whoami.dto"

const baseurl = process.env.NEXT_PUBLIC_API_BASEURL
const endpoint = `${baseurl}/auth`

async function signin(dto: AuthRequestDTO): Promise<boolean> {
  console.log(endpoint)
  try {
    const res = (await axios.post(`${endpoint}/login`, dto))?.data as AuthResponseDTO
    saveBearerToken(res.access_token)
    return true
  } catch (e) {
    return false
  }
}

function signout() {
  saveBearerToken("")
}

function useWhoami() {
    const token = getBearerToken()
    const fetcher = (url: string) => fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${token}`
      })
    }).then(res => res.json())
    return useSWR('http://localhost:4000/auth/profile', fetcher)
}

function Whoami(): WhoamiResponseDTO {
  const { data } = useWhoami()
  return data
}

const whoami = Whoami

export default {
  signin,
  signout,
  useWhoami,
  whoami,
  Whoami,
}