import { ReadOneAnnouncementResponseDto } from "app/_dto/announcement.dto"
import axios from "axios"

const baseurl = process.env.NEXT_PUBLIC_API_BASEURL
const endpoint = `${baseurl}/announcements`
// const endpoint = `http://localhost:4000/announcements`

async function getOne(id: string): Promise<ReadOneAnnouncementResponseDto> {
  return (await axios.get(`${endpoint}/${id}`)).data as ReadOneAnnouncementResponseDto
}

export default {
  getOne
}