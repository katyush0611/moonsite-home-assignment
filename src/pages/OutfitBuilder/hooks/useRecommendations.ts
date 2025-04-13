import { useState } from "react";
import { Garment, GarmentType } from "../../../models/garment.model";
import {
  recommendFromGarmentColor,
  recommendFromGarmentSize,
} from "../../../utils/recommendations.util";
import { GarmentsState } from "../../../store/garments/garments.types";

export const useRecommendations = (
  garmentsState: GarmentsState,
  nextType: GarmentType
) => {
  const [recommendedSizes, setRecommendedSizes] = useState<(string | number)[]>(
    []
  );
  const [recommendedColors, setRecommendedColors] = useState<string[]>([]);

  const updateRecommendations = (garment: Garment): void => {
    const sizeRecommendations = recommendFromGarmentSize(
      garment.type,
      garment.size
    );

    switch (nextType) {
      case "shirt":
        setRecommendedColors(
          recommendFromGarmentColor(garment.color, garmentsState.shirts.colors)
        );
        setRecommendedSizes(sizeRecommendations?.shirts as string[]);
        break;
      case "pants":
        setRecommendedColors(
          recommendFromGarmentColor(garment.color, garmentsState.pants.colors)
        );
        setRecommendedSizes(sizeRecommendations?.pants as number[]);
        break;
      case "shoes":
        setRecommendedColors(
          recommendFromGarmentColor(garment.color, garmentsState.shirts.colors)
        );
        setRecommendedSizes(sizeRecommendations?.shoes as number[]);
        break;
    }
  };

  return { recommendedColors, recommendedSizes, updateRecommendations };
};
