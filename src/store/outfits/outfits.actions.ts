import { Outfit } from "../../models/outfit.model";
import { action } from "../../utils/action-creator.util";
import { OutfitsActionTypes } from "./outfits.types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { garmentsActions } from "../garments/garments.reducer";

export const saveOutfit = createAsyncThunk(
  OutfitsActionTypes.SAVE_OUTFIT,
  async (outfit: Outfit, thunkAPI) => {
    console.log(outfit);
    const { dispatch } = thunkAPI;
    dispatch(
      garmentsActions.setSelectedGarment({
        type: outfit.shirt.type,
        id: outfit.shirt.id,
      })
    );
    dispatch(
      garmentsActions.setSelectedGarment({
        type: outfit.pants.type,
        id: outfit.pants.id,
      })
    );
    dispatch(
      garmentsActions.setSelectedGarment({
        type: outfit.shoes.type,
        id: outfit.shoes.id,
      })
    );
  }
);
