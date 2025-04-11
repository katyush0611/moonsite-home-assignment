import { Outfit } from "../../models/outfit.model";
import { action } from "../../utils/action-creator.util";
import { OutfitsActionTypes } from "./outfits.types";

export const saveOutfit = (outfit: Outfit) =>
  action(OutfitsActionTypes.SAVE_OUTFIT, { outfit });
