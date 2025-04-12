import { Outfit } from "../../models/outfit.model";
import { OutfitsActionTypes } from "./outfits.types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { garmentsActions } from "../garments/garments.reducer";

export const saveOutfit = createAsyncThunk(
  OutfitsActionTypes.SAVE_OUTFIT,
  async (outfit: Outfit, thunkAPI) => {
    console.log(outfit);
    const { dispatch } = thunkAPI;
    dispatch(garmentsActions.setSelectedGarments(outfit));
    return outfit;
  }
);
