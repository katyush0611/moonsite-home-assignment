import { PayloadAction } from "@reduxjs/toolkit";
import { GarmentsState } from "../garments.types";

const setSelectedGarments = (
  state: GarmentsState,
  action: PayloadAction<{ ids: number[] }>
): GarmentsState => {
  const { ids } = action.payload;
  if (state.usedGarmentIds.find((id) => id === ids[0])) {
    return {
      ...state,
      usedGarmentIds: state.usedGarmentIds.filter((id) => !ids.includes(id)),
      updatedLast: Date.now(),
    };
  }
  state.usedGarmentIds.push(...ids);
  return state;
};

export { setSelectedGarments };
