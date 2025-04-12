import { Outfit } from "../../models/outfit.model";

export enum OutfitsActionTypes {
  SAVE_OUTFIT = "@@outfits/SAVE_OUTFIT",
  DELETE_OUTFIT = "@@outfits/DELETE_OUTFIT",
}

export interface OutfitsState {
  outfits: Outfit[];
}
