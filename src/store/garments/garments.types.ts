import { Garment, GarmentType } from "../../models/garment.model";

export enum GarmentsActionTypes {
  GET_GARMENTS_REQUEST = "@@garments/GET_GARMENTS_REQUEST",
  SAVE_SELECTED_GARMENT_ID = "@@garments/SAVE_SELECTED_GARMENT_ID",
}

interface GarmentCategoryState<T = GarmentType, S = number | string> {
  garments: Garment<T>[];
  brands: string[];
  sizes: S[];
  colors: string[];
}

export interface GarmentsState {
  shirts: GarmentCategoryState<"shirt", string>;
  pants: GarmentCategoryState<"pants", string>;
  shoes: GarmentCategoryState<"shoes", number>;
  usedGarmentIds: number[];
  updatedLast: number;
}
