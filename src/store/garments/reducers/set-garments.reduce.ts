import { GarmentsState } from "../garments.types";

const setGarments = (state: GarmentsState, action: any): GarmentsState => {
  return {
    ...state,
    garments: action.payload,
  };
};

export { setGarments };
