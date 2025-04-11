import { GarmentsState } from "./garments.types";

export const initialState: GarmentsState = {
  shirts: {all: [], selected: []},
  pants: {all: [], selected: []},
  shoes: {all: [], selected: []},
  updatedLast: Date.now()
};
