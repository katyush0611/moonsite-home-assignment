import { GarmentsState } from "./garments.types";

export const initialState: GarmentsState = {
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
};
