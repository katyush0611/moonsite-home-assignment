import { initialState } from "./outfits.state";
import * as OutfitsReduceFunctions from "./reducers/index";
import { createSlice } from "@reduxjs/toolkit";
import { saveOutfit } from "./outfits.actions";

const outfitsSlice = createSlice({
  name: "outfits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveOutfit.fulfilled, (state, action) => {
      state.outfits.push(action.payload);
    });
  },
});

export const outfitsReducer = outfitsSlice.reducer;
