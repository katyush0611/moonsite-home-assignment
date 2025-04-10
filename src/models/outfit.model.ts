import { Garment } from "./garment.model";

export interface Outfit {
  shirt: Garment<"shirt">;
  pants: Garment<"pants">;
  shoes: Garment<"shoes">;
}
