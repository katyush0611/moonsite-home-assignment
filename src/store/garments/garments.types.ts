import { Garment, GarmentType } from "../../models/garment.model";

export enum GarmentsActionTypes {
  GET_GARMENTS_REQUEST = "@@garments/GET_GARMENTS_REQUEST",
  GET_GARMENTS_SUCCESS = "@@garments/GET_GARMENTS_SUCCESS",
}

export interface GarmentsState {
  // garments: Garment<GarmentType>[];
  shirts: Garment<"shirt">[];
  pants: Garment<"pants">[];
  shoes: Garment<"shoes">[];
}
