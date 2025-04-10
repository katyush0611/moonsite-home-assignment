import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { garmentsReducer } from "./garments/garments.reducer";
import { outfitsReducer } from "./outfits/outfits.reducer";

export const rootReducer = combineReducers({
  garments: garmentsReducer,
  outfits: outfitsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
