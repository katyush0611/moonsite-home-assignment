import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { garmentsReducer } from "./garments/garments.reducer";
import { outfitsReducer } from "./outfits/outfits.reducer";
import { GarmentsState } from "./garments/garments.types";
import { OutfitsState } from "./outfits/outfits.types";

export interface ApplicationState {
  garmnetsStore: GarmentsState;
  outfitsStore: OutfitsState;
}

export const rootReducer = combineReducers({
  garmentsStore: garmentsReducer.reducer,
  outfitsStore: outfitsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
