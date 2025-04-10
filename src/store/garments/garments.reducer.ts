import { Reducer } from "redux";
import { initialState } from "./garments.state";
import { GarmentsActionTypes, GarmentsState } from "./garments.types";
import * as GarmentsReduceFunctions from "./reducers/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGarments, setGarments } from "./garments.actions";
import { Garment, GarmentType } from "../../models/garment.model";

// const reducer: Reducer<GarmentsState> = (
//   state: GarmentsState = initialState,
//   action
// ): GarmentsState => {
//   switch (action.type) {
//     case GarmentsActionTypes.GET_GARMENTS_SUCCESS:
//       return GarmentsReduceFunctions.setGarments(state, action);
//     default:
//       return state;
//   }
// };

// export { reducer as garmentsReducer };

const reducer = createSlice({
  name: "garments",
  initialState,
  reducers: {
    // setGarments(
    //   state: GarmentsState,
    //   action: PayloadAction<Garment<GarmentType>[]>
    // ) {
    //   GarmentsReduceFunctions.setGarments(state, action);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGarments.pending, (state) => {
        // state.loading = true;
      })
      .addCase(fetchGarments.fulfilled, (state, action) => {
        // state.garments = action.payload;
        return GarmentsReduceFunctions.setGarments(state, action);
        // state.loading = false;
      })
      .addCase(fetchGarments.rejected, (state) => {
        // state.loading = false;
      });
  },
});

export { reducer as garmentsReducer };
