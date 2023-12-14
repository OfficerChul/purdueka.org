export function saveBearerToken(token: string) {
  localStorage.setItem("bearer", token);
}

export function getBearerToken(): string {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem("bearer") || ""
  }
  return ""
}