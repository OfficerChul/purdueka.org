export type SignupRequestDTO = {
  email: string;
  password: string;
  firstname: string;
  lastname: string
  major: string;
  expectedGradDate: Date;
}

export type EmailDupCheckRequestDTO = {
  email: string;
}

export type EmailDupCheckResponseDTO = {
  isDuplicated: boolean;
}

export type AllUserDataResponseDTO = {
  users: UserDTO[];
  total: number;
}

export type DeleteUserDataResponseDTO = {
  [x: string]: any;
  id: number;
  deletedAt: Date;
}

export type RestoreUserDataResponseDTO = {
  id: number;
  restoredAt: Date;
}

export type UserDTO = {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  major: string;
  expectedGradDate: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  role: string;
}