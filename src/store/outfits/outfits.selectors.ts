import { Outfit } from "../../models/outfit.model";
import { OutfitsState } from "./outfits.types";

export function getOutfits(store: OutfitsState): Outfit[] {
  return store.outfits;
}
