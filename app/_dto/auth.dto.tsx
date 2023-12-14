import { UserRole } from "app/_api/global";

export type AuthRequestDTO = {
  email: string;
  password: string;
}

export type AuthResponseDTO = {
  email: string;
  name: string;
  role: UserRole
  access_token: string;
}
