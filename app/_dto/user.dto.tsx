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