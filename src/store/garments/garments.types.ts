import { Garment, GarmentType } from "../../models/garment.model";

export enum GarmentActionTypes {
  SET_GARMENTS = "@@garments/SET_GARMENTS",
}

export interface GarmentsState {
  garments: Garment<GarmentType>[];
}
