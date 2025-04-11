import { ApplicationState } from "./store";

export const initialState: ApplicationState = {
  garmentsStore: {
    shirts: {
      all: [],
      selected: [],
    },
    pants: { all: [], selected: [] },
    shoes: { all: [], selected: [] },
    updatedLast: Date.now(),
  },
  outfitsStore: {
    outfits: [],
  },
};
