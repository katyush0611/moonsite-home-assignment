import { OutfitsState } from "../outfits.types";

const saveOutfit = (state: OutfitsState, action: any): OutfitsState => {
  return {
    ...state,
    outfits: [...state.outfits, action.payload.outfit],
  };
};

export { saveOutfit };
