import { initialState } from "./outfits.state";
import { createSlice } from "@reduxjs/toolkit";
import { deleteOutfit, saveOutfit } from "./outfits.actions";
import { Outfit } from "../../models/outfit.model";
import { randomIdGenerator } from "../../utils/utils";

const outfitsSlice = createSlice({
  name: "outfits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveOutfit.fulfilled, (state, action) => {
        const outfit: Outfit = action.payload;
        const newId: number = randomIdGenerator(outfit.shirt.id);
        state.outfits.push({ ...outfit, id: newId });
      })
      .addCase(deleteOutfit.fulfilled, (state, action) => {
        state.outfits = state.outfits.filter(
          (outfit) => outfit.id !== action.payload.id
        );
      });
  },
});

export const outfitsReducer = outfitsSlice.reducer;
export const outfitsActions = outfitsSlice.actions;
