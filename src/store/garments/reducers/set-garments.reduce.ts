import { Garment, GarmentType } from "../../../models/garment.model";
import { GarmentsState } from "../garments.types";

const setGarments = (state: GarmentsState, action: any): GarmentsState => {
  let shirts: Garment<"shirt">[] = [];
  let pants: Garment<"pants">[] = [];
  let shoes: Garment<"shoes">[] = [];

  action.payload.forEach((garment: Garment<GarmentType>) => {
    switch (garment.type) {
      case "shirt":
        shirts.push(garment as Garment<"shirt">);
        break;
      case "pants":
        pants.push(garment as Garment<"pants">);
        break;
      case "shoes":
        shoes.push(garment as Garment<"shoes">);
        break;
      default:
    }
  });
  return {
    ...state,
    shirts: { all: shirts, selected: [] },
    pants: { all: pants, selected: [] },
    shoes: { all: shoes, selected: [] },
  };
};

export { setGarments };
