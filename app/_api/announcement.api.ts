import { ReadOneAnnouncementResponseDto } from "app/_dto/announcement.dto"
import axios from "axios"

const baseurl = process.env.API_BASEURL
const endpoint = `${baseurl}/announcements`

export async function getOne(id: string): Promise<ReadOneAnnouncementResponseDto> {
  console.log(`asdf${endpoint}/${id}`)
  return (await axios.get(`${endpoint}/${id}`)).data as ReadOneAnnouncementResponseDto
}