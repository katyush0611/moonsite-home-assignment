import { Reducer } from "redux";
import initialState from "./outfits.state";
import { OutfitsActionTypes, OutfitsState } from "./outfits.types";
import * as OutfitsReduceFunctions from "./reducers/index";

const reducer: Reducer<OutfitsState> = (
  state: OutfitsState = initialState,
  action
): OutfitsState => {
  switch (action.type) {
    case OutfitsActionTypes.SAVE_OUTFIT:
      return OutfitsReduceFunctions.saveOutfit(state, action);
    default:
      return state;
  }
};

export { reducer as outfitsReducer };
