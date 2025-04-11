import { Garment, GarmentType } from "../../models/garment.model";

export enum GarmentsActionTypes {
  GET_GARMENTS_REQUEST = "@@garments/GET_GARMENTS_REQUEST",
  GET_GARMENTS_SUCCESS = "@@garments/GET_GARMENTS_SUCCESS",
  SAVE_SELECTED_GARMENT_ID = "@@garments/SAVE_SELECTED_GARMENT_ID",
}

export interface GarmentsState {
  // garments: Garment<GarmentType>[];
  shirts: {
    all: Garment<"shirt">[];
    selected: number[];
  };
  pants: { all: Garment<"pants">[]; selected: number[] };
  shoes: { all: Garment<"shoes">[]; selected: number[] };
  updatedLast: number;
}
