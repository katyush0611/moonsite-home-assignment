import { ApplicationState } from "./store";

export const initialState: ApplicationState = {
  garmentsStore: {
    shirts: {
      garments: [],
      brands: [],
      sizes: [],
      colors: [],
    },
    pants: {
      garments: [],
      brands: [],
      sizes: [],
      colors: [],
    },
    shoes: {
      garments: [],
      brands: [],
      sizes: [],
      colors: [],
    },
    usedGarmentIds: [],
    updatedLast: Date.now(),
  },
  outfitsStore: {
    outfits: [],
  },
};
