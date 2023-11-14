export type AuthRequestDTO = {
  email: string;
  password: string;
}

export type AuthResponseDTO = {
  email: string;
  password: string;
  access_token: string;
}
