import { Garment } from "../../models/garment.model";

export enum GarmentsActionTypes {
  GET_GARMENTS_REQUEST = "@@garments/GET_GARMENTS_REQUEST",
  GET_GARMENTS_SUCCESS = "@@garments/GET_GARMENTS_SUCCESS",
  SAVE_SELECTED_GARMENT_ID = "@@garments/SAVE_SELECTED_GARMENT_ID",
}

export interface GarmentsState {
  shirts: Garment<"shirt">[];
  pants: Garment<"pants">[];
  shoes: Garment<"shoes">[];
  usedGarmentIds: number[];
  updatedLast: number;
}
