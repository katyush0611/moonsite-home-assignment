import { Garment, GarmentType } from "../../models/garment.model";
import { GarmentsState } from "./garments.types";

export function getAllGarments(store: GarmentsState): Garment<GarmentType>[] {
  return [...store.shirts, ...store.pants, ...store.shoes];
}

export function getShirts(store: GarmentsState): Garment<"shirt">[] {
  return store.shirts;
}

export function getPants(store: GarmentsState): Garment<"pants">[] {
  return store.pants;
}

export function getShoes(store: GarmentsState): Garment<"shoes">[] {
  return store.shoes;
}
