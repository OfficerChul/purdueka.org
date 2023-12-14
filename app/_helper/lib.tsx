import { WhoamiResponseDTO } from "app/_dto/whoami.dto"

export const isEmailAddress = (input: string): boolean => 
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/.test(input)

export const datestringToDate = (input: string): Date => new Date(input)

export const hasLoggedIn = (user: WhoamiResponseDTO) => user?.name != null