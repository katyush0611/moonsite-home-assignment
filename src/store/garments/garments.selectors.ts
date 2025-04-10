import { Garment, GarmentType } from "../../models/garment.model";
import { GarmentsState } from "./garments.types";

export function getGarments(store: GarmentsState): Garment<GarmentType>[] {
  return store.garments;
}
