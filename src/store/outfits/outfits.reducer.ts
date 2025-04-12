import { initialState } from "./outfits.state";
import * as OutfitsReduceFunctions from "./reducers/index";
import { createSlice } from "@reduxjs/toolkit";
import { saveOutfit } from "./outfits.actions";
import { Outfit } from "../../models/outfit.model";
import { randomIdGenerator } from "../../utils/utils";

const outfitsSlice = createSlice({
  name: "outfits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveOutfit.fulfilled, (state, action) => {
      const outfit: Outfit = action.payload;
      const newId: number = randomIdGenerator(outfit.shirt.id);
      state.outfits.push({...outfit, id: newId});
    });
  },
});

export const outfitsReducer = outfitsSlice.reducer;
