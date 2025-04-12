import { GarmentsState } from "../garments.types";

const setSelectedGarments = (
  state: GarmentsState,
  action: any
): GarmentsState => {
  const { outfit } = action.payload;
  state.usedGarmentIds.push(outfit.shirt.id, outfit.pants.id, outfit.shoes.id);
  return state;
};

export { setSelectedGarments };
