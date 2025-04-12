import { ApplicationState } from "./store";

export const initialState: ApplicationState = {
  garmentsStore: {
    shirts: [],
    pants: [],
    shoes: [],
    usedGarmentIds: [],
    updatedLast: Date.now(),
  },
  outfitsStore: {
    outfits: [],
  },
};
