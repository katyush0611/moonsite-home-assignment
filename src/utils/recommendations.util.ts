import { Garment, GarmentType } from "../models/garment.model";
import { colorDistance, getHexFromColorName, hexToRgb } from "./colors.util";
import { SizeTag, SizeTagsArray } from "./sizes.util";
import { sortAscending } from "./utils";

export const recommendFromGarmentColor = (
  garmentColor: string,
  availableColors: string[],
  count = 3
): string[] => {
  const inputHex: string | null = getHexFromColorName(garmentColor);
  if (!inputHex) throw new Error(`Invalid input color: ${garmentColor}`);

  const inputRGB: [number, number, number] = hexToRgb(inputHex);

  const validColors: { color: string; dist: number }[] = availableColors
    .map((color) => {
      const hex = getHexFromColorName(color);
      if (!hex) return null;
      return {
        color,
        dist: colorDistance(inputRGB, hexToRgb(hex)),
      };
    })
    .filter((c) => c !== null) as { color: string; dist: number }[];

  return validColors
    .sort((a, b) => a.dist - b.dist)
    .slice(0, count)
    .map((colorObject) => colorObject.color);
};

export const recommendFromGarmentSize = (
  sizeTag: SizeTag,
  availbleSizes: (string | number)[]
): (string | number)[] | null => {
  const sortedAvailbles = sortAscending(availbleSizes as number[]);

  const sizeXscore: number =
    ((SizeTagsArray.indexOf(sizeTag) + 1) / SizeTagsArray.length) *
    +(availbleSizes.length - 1);

  return [
    sortedAvailbles[Math.floor(sizeXscore)],
    sortedAvailbles[Math.floor(sizeXscore) + 1],
  ];
};

export const sortBySizeRecommendations = (
  garments: Garment[],
  recommendedSizes: number[]
) => {
  const customSort = (
    a: Garment<GarmentType, number>,
    b: Garment<GarmentType, number>
  ) => {
    const aIndex = recommendedSizes.indexOf(a.size);
    const bIndex = recommendedSizes.indexOf(b.size);

    // If both are in recommendedSizes, sort by their index
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }

    // Only one is in the recommendedSizes
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;

    // Neither in recommendedSizes
    const aInHigh = a.size > Math.max(...recommendedSizes);
    const bInHigh = b.size > Math.max(...recommendedSizes);
    const aInLow = a.size < Math.min(...recommendedSizes);
    const bInLow = b.size < Math.min(...recommendedSizes);

    // Both above max
    if (aInHigh && bInHigh) return a.size - b.size;

    // Both below min
    if (aInLow && bInLow) return a.size - b.size;

    // One above, one below
    if (aInHigh && bInLow) return -1;
    if (aInLow && bInHigh) return 1;

    // Otherwise sort ascending
    return a.size - b.size;
  };
  //@ts-ignore
  return garments.sort(customSort);
};
