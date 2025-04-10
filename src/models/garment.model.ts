export type GarmentType = "shirt" | "pants" | "shoes";

export interface Garment<T extends GarmentType> {
  type: T;
  brand: string;
  color: string;
  size: string;
}
