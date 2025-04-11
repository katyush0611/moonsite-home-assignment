import { Reducer } from "redux";
import { initialState } from "./outfits.state";
import { OutfitsActionTypes, OutfitsState } from "./outfits.types";
import * as OutfitsReduceFunctions from "./reducers/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { saveOutfit } from "./outfits.actions";
import { Outfit } from "../../models/outfit.model";
import { setSelectedGarment } from "../garments/garments.actions";

// const reducer: Reducer<OutfitsState> = (
//   state: OutfitsState = initialState,
//   action
// ): OutfitsState => {
//   switch (action.type) {
//     case OutfitsActionTypes.SAVE_OUTFIT:
//       return OutfitsReduceFunctions.saveOutfit(state, action);
//     default:
//       return state;
//   }
// };

const reducer = createSlice({
  name: "garments",
  initialState,
  reducers: (create) => ({
    saveOutfit: create.reducer(
      (state: OutfitsState, action: PayloadAction<Outfit>) => {
        // const outfit: Outfit = action.payload;

        state = OutfitsReduceFunctions.saveOutfit(state, action);
      }
    ),
  }),
});

export { reducer as outfitsReducer };
