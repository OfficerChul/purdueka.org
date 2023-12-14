import { UserRole } from "./auth.dto";

export type WhoamiResponseDTO = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}
