import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Garment, GarmentType } from "../../models/garment.model";
import { action } from "../../utils/action-creator.util";
import { GarmentsActionTypes } from "./garments.types";
import APIService from "../../services/api/";

export const fetchGarments = createAsyncThunk(
  GarmentsActionTypes.GET_GARMENTS_REQUEST,
  async (_, thunkAPI) => {
    const response = await APIService.fetchAllGarments();
    return response;
  }
);

export const setGarments = (garments: Garment<GarmentType>[]) =>
  action(GarmentsActionTypes.GET_GARMENTS_SUCCESS, { garments });

// export const setSelectedGarment = (type: GarmentType, id: number) => createAction(GarmentsActionTypes.SAVE_SELECTED_GARMENT_ID, {type, id});

export const setSelectedGarment = createAction(
  GarmentsActionTypes.SAVE_SELECTED_GARMENT_ID,
  (type: GarmentType, id: number) => {
    return {
      payload: { type, id },
    };
  }
);
