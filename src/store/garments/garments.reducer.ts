import { initialState } from "./garments.state";
import { GarmentsState } from "./garments.types";
import * as GarmentsReduceFunctions from "./reducers/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGarments } from "./garments.actions";
import { Outfit } from "../../models/outfit.model";

const garmentsSlice = createSlice({
  name: "garments",
  initialState,
  reducers: {
    setSelectedGarments(
      state: GarmentsState,
      action: PayloadAction<{ outfit: Outfit }>
    ) {
      return GarmentsReduceFunctions.setSelectedGarments(state, action);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGarments.fulfilled, (state, action) => {
      return GarmentsReduceFunctions.setGarments(state, action);
    });
  },
});

export const garmentsReducer = garmentsSlice.reducer;
export const garmentsActions = garmentsSlice.actions;
