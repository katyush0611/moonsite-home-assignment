import { Reducer } from "redux";
import initialState from "./garments.state";
import { GarmentActionTypes, GarmentsState } from "./garments.types";
import * as GarmentsReduceFunctions from "./reducers/index";

const reducer: Reducer<GarmentsState> = (
  state: GarmentsState = initialState,
  action
): GarmentsState => {
  switch (action.type) {
    case GarmentActionTypes.SET_GARMENTS:
      return GarmentsReduceFunctions.setGarments(state, action);
    default:
      return state;
  }
};

export { reducer as garmentsReducer };
