import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { garmentsReducer } from "./garments/garments.reducer";
import { outfitsReducer } from "./outfits/outfits.reducer";
import { GarmentsState } from "./garments/garments.types";
import { OutfitsState } from "./outfits/outfits.types";
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "../utils/utils";

export interface ApplicationState {
  garmentsStore: GarmentsState;
  outfitsStore: OutfitsState;
}

export const rootReducer = combineReducers({
  garmentsStore: garmentsReducer,
  outfitsStore: outfitsReducer,
});

const preloadedState = loadStateFromLocalStorage();

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
