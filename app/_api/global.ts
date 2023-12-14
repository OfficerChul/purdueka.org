export enum UserRole {
  ROOT = 'root',
  ADMIN = 'admin',
  USER = 'user',
}

export type GlobalState = {
  email?: string;
  name?: string;
  role?: UserRole;
  hasLoggedIn: boolean;
}

export function saveGlobal(data: GlobalState) {
  localStorage.setItem("global", JSON.stringify(data));
}

export function getGlobal(): GlobalState {
  return JSON.parse(localStorage?.getItem("global") || "{}")
}