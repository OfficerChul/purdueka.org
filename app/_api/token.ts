export function saveBearerToken(token: string) {
  localStorage.setItem("bearer", token);
}

export function getBearerToken(): string {
  return localStorage.getItem("bearer") || ""
}