export type GarmentType = "shirt" | "pants" | "shoes";

export interface Garment<T = GarmentType, S = number | string> {
  id: number;
  type: T;
  brand: string;
  color: string;
  size: S;
}
