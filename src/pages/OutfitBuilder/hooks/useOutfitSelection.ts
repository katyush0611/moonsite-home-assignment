import { useState } from "react";
import { Outfit } from "../../../models/outfit.model";
import { Garment, GarmentType } from "../../../models/garment.model";
import { GarmentsState } from "../../../store/garments/garments.types";
import { useRecommendations } from "./useRecommendations";

export const useOutfitSelection = (
  garmentsState: GarmentsState,
  nextType: GarmentType,
  next: () => void
) => {
  const [outfit, setOutfit] = useState<Outfit>({} as Outfit);

  const { recommendedColors, recommendedSizes, updateRecommendations } =
    useRecommendations(garmentsState, nextType);

  const onSelectGarment = (garment: Garment<GarmentType>): void => {
    switch (garment.type) {
      case "shirt":
        setOutfit((prev) => ({ ...prev, shirt: garment as Garment<"shirt"> }));
        break;
      case "pants":
        setOutfit((prev) => ({ ...prev, pants: garment as Garment<"pants"> }));
        break;
      case "shoes":
        setOutfit((prev) => ({ ...prev, shoes: garment as Garment<"shoes"> }));
        break;
    }
    updateRecommendations(garment);
    next();
  };

  return { outfit, recommendedColors, recommendedSizes, onSelectGarment };
};
