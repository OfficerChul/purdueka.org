import { UserRole } from "./auth.dto";

export type WhoamiResponseDTO = {
  name: string;
  email: string;
  role: UserRole;
}
