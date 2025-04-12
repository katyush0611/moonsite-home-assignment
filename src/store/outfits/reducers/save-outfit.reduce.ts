import { OutfitsState } from "../outfits.types";

const saveOutfit = (state: OutfitsState, action: any): OutfitsState => {
  console.log(action);
  return {
    ...state,
    // outfits: [...state.outfits.push(action.payload.outfit)],
  };
};

export { saveOutfit };
