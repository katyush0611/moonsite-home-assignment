import { Outfit } from "../../models/outfit.model";
import { OutfitsActionTypes } from "./outfits.types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { garmentsActions } from "../garments/garments.reducer";

export const saveOutfit = createAsyncThunk(
  OutfitsActionTypes.SAVE_OUTFIT,
  async (outfit: Outfit, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(
      garmentsActions.setSelectedGarments({
        ids: [outfit.shirt.id, outfit.pants.id, outfit.shoes.id],
      })
    );
    return outfit;
  }
);

export const deleteOutfit = createAsyncThunk(
  OutfitsActionTypes.DELETE_OUTFIT,
  async (outfit: Outfit, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(
      garmentsActions.setSelectedGarments({
        ids: [outfit.shirt.id, outfit.pants.id, outfit.shoes.id],
      })
    );
    return outfit;
  }
);
