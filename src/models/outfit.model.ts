import { Garment } from "./garment.model";

export interface Outfit {
  id: number;
  shirt: Garment<"shirt">;
  pants: Garment<"pants">;
  shoes: Garment<"shoes">;
}
