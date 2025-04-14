import { useState } from "react";
import { Garment, GarmentType } from "../../../models/garment.model";
import { GarmentsState } from "../../../store/garments/garments.types";
import {
  recommendFromGarmentColor,
  recommendFromGarmentSize,
} from "../../../utils/recommendations.util";
import { getSizeTagFromGarment, SizeTag } from "../../../utils/sizes.util";

export const useRecommendations = (
  garmentsState: GarmentsState,
  currentType: GarmentType,
  nextType: GarmentType
) => {
  const [recommendedSizes, setRecommendedSizes] = useState<(string | number)[]>(
    []
  );
  const [recommendedColors, setRecommendedColors] = useState<string[]>([]);

  const updateRecommendations = (garment: Garment): void => {
    let currentGarmentSizeTag: SizeTag = getSizeTagFromGarment(garment);

    switch (nextType) {
      case "shirt":
        setRecommendedColors(
          recommendFromGarmentColor(garment.color, garmentsState.shirts.colors)
        );
        setRecommendedSizes(
          recommendFromGarmentSize(
            currentGarmentSizeTag,
            garmentsState.shirts.sizes
          ) as string[]
        );
        break;
      case "pants":
        setRecommendedColors(
          recommendFromGarmentColor(garment.color, garmentsState.pants.colors)
        );
        setRecommendedSizes(
          recommendFromGarmentSize(
            currentGarmentSizeTag,
            garmentsState.pants.sizes
          ) as number[]
        );
        break;
      case "shoes":
        setRecommendedColors(
          recommendFromGarmentColor(garment.color, garmentsState.shirts.colors)
        );
        setRecommendedSizes(
          recommendFromGarmentSize(
            currentGarmentSizeTag,
            garmentsState.shoes.sizes
          ) as number[]
        );

        break;
    }
  };

  return { recommendedColors, recommendedSizes, updateRecommendations };
};
