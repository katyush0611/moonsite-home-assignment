import { T } from "react-router/dist/development/route-data-5OzAzQtT";
import { Garment, GarmentType } from "../../../models/garment.model";
import { GarmentsState } from "../garments.types";
import { responseDataMock } from "../../../services/api/api-service-impl";

const extractAttributes = <S = number | string>(
  garments: Garment<T, S>[]
): { brands: string[]; sizes: S[]; colors: string[] } => {
  let brands: string[] = [];
  let sizes: S[] = [];
  let colors: string[] = [];

  garments.forEach((garment) => {
    !brands.includes(garment.brand) && brands.push(garment.brand);
    !sizes.includes(garment.size) && sizes.push(garment.size);
    !colors.includes(garment.color) && colors.push(garment.color);
  });

  return { brands, sizes, colors };
};

const setGarments = (state: GarmentsState, action: any): GarmentsState => {
  let shirts: Garment<"shirt", string>[] = [];
  let pants: Garment<"pants", string>[] = [];
  let shoes: Garment<"shoes", number>[] = [];

  const garments = action.payload.error ? responseDataMock : action.payload;

  garments.forEach((garment: Garment<GarmentType>) => {
    switch (garment.type) {
      case "shirt":
        shirts.push(garment as Garment<"shirt", string>);
        break;
      case "pants":
        pants.push(garment as Garment<"pants", string>);
        break;
      case "shoes":
        shoes.push(garment as Garment<"shoes", number>);
        break;
      default:
    }
  });
  return {
    ...state,
    shirts: {
      garments: shirts,
      ...extractAttributes(shirts),
    },
    pants: { garments: pants, ...extractAttributes(pants) },
    shoes: { garments: shoes, ...extractAttributes(shoes) },
  };
};

export { setGarments };
