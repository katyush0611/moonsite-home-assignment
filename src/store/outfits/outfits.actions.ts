import { Garment, GarmentType } from "../../models/garment.model";
import { action } from "../../utils/action-creator.util";
import { GarmentActionTypes } from "./outfits.types";

export const setGarments = (garments: Garment<GarmentType>[]) =>
  action(GarmentActionTypes.SET_GARMENTS, { garments });
