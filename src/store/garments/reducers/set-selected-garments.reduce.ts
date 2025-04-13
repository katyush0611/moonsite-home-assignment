import { PayloadAction } from "@reduxjs/toolkit";
import { GarmentsState } from "../garments.types";
import { Outfit } from "../../../models/outfit.model";

const setSelectedGarments = (
  state: GarmentsState,
  action: PayloadAction<{ outfit: Outfit }>
): GarmentsState => {
  const { outfit } = action.payload;
  let updatedUsedGarmentIds: number[] = [
    outfit.shirt.id,
    outfit.pants.id,
    outfit.shoes.id,
  ];

  if (!state.usedGarmentIds.find((id) => id === outfit.shirt.id)) {
    state.shirts.garments.forEach(
      (g) => g.brand === outfit.shirt.brand && updatedUsedGarmentIds.push(g.id)
    );
    state.pants.garments.forEach(
      (g) => g.brand === outfit.pants.brand && updatedUsedGarmentIds.push(g.id)
    );
    state.shoes.garments.forEach(
      (g) => g.brand === outfit.shoes.brand && updatedUsedGarmentIds.push(g.id)
    );
    return {
      ...state,
      usedGarmentIds: updatedUsedGarmentIds,
      updatedLast: Date.now(),
    };
  } else {
    let availbleItems: number[] = [];
    state.shirts.garments.forEach(
      (g) => g.brand === outfit.shirt.brand && availbleItems.push(g.id)
    );
    state.pants.garments.forEach(
      (g) => g.brand === outfit.pants.brand && availbleItems.push(g.id)
    );
    state.shoes.garments.forEach(
      (g) => g.brand === outfit.shoes.brand && availbleItems.push(g.id)
    );
    return {
      ...state,
      usedGarmentIds: state.usedGarmentIds.filter(
        (id) => !availbleItems.includes(id)
      ),
    };
  }
};

export { setSelectedGarments };
