export type GarmentType = "shirt" | "pants" | "shoes";

// export type ShirtSize = "S" | "M" | "L" | "XL" | "XXL";

// export type PantsSize = 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46;

// export type ShoesSize = 30 | 31 | 32 | 33 | 34 | 41 | 42 | 43 | 44 | 45 | 46;

export interface Garment<T = GarmentType> {
  id: number;
  type: T;
  brand: string;
  color: string;
  size: string | number;
}
