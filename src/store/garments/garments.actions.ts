import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { GarmentType } from "../../models/garment.model";
import { GarmentsActionTypes } from "./garments.types";
import APIService from "../../services/api/";

export const fetchGarments = createAsyncThunk(
  GarmentsActionTypes.GET_GARMENTS_REQUEST,
  async () => {
    const response = await APIService.fetchAllGarments();
    return response;
  }
);

export const setSelectedGarment = createAction(
  GarmentsActionTypes.SAVE_SELECTED_GARMENT_ID,
  (type: GarmentType, id: number) => {
    return {
      payload: { type, id },
    };
  }
);
