import { OutfitsState } from "../outfits.types";

const saveOutfit = (state: OutfitsState, action: any): OutfitsState => {
  return {
    ...state,
    // outfits: [...state.outfits.push(action.payload.outfit)],
  };
};

export { saveOutfit };
