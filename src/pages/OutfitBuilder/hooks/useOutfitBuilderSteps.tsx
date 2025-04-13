import { StepsProps } from "antd";
import GarmentsList from "../../../components/GarmentsList/GarmentsList";
import { Garment, GarmentType } from "../../../models/garment.model";
import { Outfit } from "../../../models/outfit.model";
import { GarmentsState } from "../../../store/garments/garments.types";

export const useOutfitBuilderSteps = ({
  garmentsState,
  outfit,
  recommendedColors,
  recommendedSizes,
  initialStep,
  onSelectGarment,
}: {
  garmentsState: GarmentsState;
  outfit: Outfit;
  recommendedColors: string[];
  recommendedSizes: (string | number)[];
  initialStep?: string;
  onSelectGarment: (garment: Garment<GarmentType>) => void;
}) => {
  const steps = [
    {
      key: "shirt",
      title: "Shirts",
      content: (
        <GarmentsList
          garments={garmentsState.shirts.garments}
          filters={{
            barnds: garmentsState.shirts.brands,
            colors: garmentsState.shirts.colors,
            sizes: garmentsState.shirts.sizes,
          }}
          recommendations={{
            colors: recommendedColors,
            sizes: recommendedSizes,
          }}
          disabledIds={garmentsState.usedGarmentIds}
          selectedGarmentId={outfit?.shirt?.id}
          setSelectedGarment={onSelectGarment}
        />
      ),
    },
    {
      key: "pants",
      title: "Pants",
      content: (
        <GarmentsList
          garments={garmentsState.pants.garments}
          filters={{
            barnds: garmentsState.pants.brands,
            colors: garmentsState.pants.colors,
            sizes: garmentsState.pants.sizes,
          }}
          recommendations={{
            colors: recommendedColors,
            sizes: recommendedSizes,
          }}
          disabledIds={garmentsState.usedGarmentIds}
          selectedGarmentId={outfit?.pants?.id}
          setSelectedGarment={onSelectGarment}
        />
      ),
    },
    {
      key: "shoes",
      title: "Shoes",
      content: (
        <GarmentsList
          garments={garmentsState.shoes.garments}
          filters={{
            barnds: garmentsState.shoes.brands,
            colors: garmentsState.shoes.colors,
            sizes: garmentsState.shoes.sizes,
          }}
          recommendations={{
            colors: recommendedColors,
            sizes: recommendedSizes,
          }}
          disabledIds={garmentsState.usedGarmentIds}
          selectedGarmentId={outfit?.shoes?.id}
          setSelectedGarment={onSelectGarment}
        />
      ),
    },
  ].sort((a, b) =>
    a.key === initialStep ? -1 : b.key === initialStep ? 1 : 0
  );

  const stepItems = steps.map(
    (item) =>
      ({
        iconPrefix: item.key,
        title: item.title,
        status: "process",
      } as StepsProps)
  );

  return { steps, stepItems };
};
