import { initialState } from "./garments.state";
import { GarmentsState } from "./garments.types";
import * as GarmentsReduceFunctions from "./reducers/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGarments } from "./garments.actions";
import { GarmentType } from "../../models/garment.model";

const garmentsSlice = createSlice({
  name: "garments",
  initialState,
  reducers: {
    setSelectedGarment(
      state: GarmentsState,
      action: PayloadAction<{ type: GarmentType; id: number }>
    ) {
      state = {
        ...GarmentsReduceFunctions.setSelectedGarment(state, action),
        updatedLast: Date.now(),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGarments.fulfilled, (state, action) => {
        return GarmentsReduceFunctions.setGarments(state, action);
      })
      .addCase(fetchGarments.rejected, (state) => {});
  },
});

export const garmentsReducer = garmentsSlice.reducer;
export const garmentsActions = garmentsSlice.actions;
