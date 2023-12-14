export enum UserRole {
  ROOT = 'root',
  ADMIN = 'admin',
  USER = 'user',
}

export type AuthRequestDTO = {
  email: string;
  password: string;
}

export type AuthResponseDTO = {
  email: string;
  name: string;
  role: UserRole;
  access_token: string;
}
