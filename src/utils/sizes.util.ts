import { Garment } from "../models/garment.model";

export enum SizeTag {
  XXS = "XXS",
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}

export const SizeTagsArray: SizeTag[] = [
  SizeTag.XXS,
  SizeTag.XS,
  SizeTag.S,
  SizeTag.M,
  SizeTag.L,
  SizeTag.XL,
  SizeTag.XXL,
];

// gets numeric garment size, and sizes range min&max
// return as SizeTag universal unit
// eexample: getSizeTagFromNumericSize(37, 36, 45) => SizeTag.S
const getSizeTagFromNumericSize = (
  size: number,
  minSize: number,
  maxSize: number
): SizeTag => {
  // {37: S, 38: M}
  let sizeTags: { [key: number]: SizeTag } = {};

  const sizeRange: number[] = Array.from(
    { length: maxSize - minSize + 1 },
    (_, i) => minSize + i
  );

  sizeRange.forEach((sizeInRange, index) => {
    const sizeXscore: number =
      ((index + 1) / sizeRange.length) * SizeTagsArray.length - 1;
    sizeTags[sizeInRange] = SizeTagsArray[Math.floor(sizeXscore)] || "XXS";
  });

  return sizeTags[size];
};

export const getSizeTagFromGarment = (garment: Garment): SizeTag => {
  switch (garment.type) {
    case "shirt":
      return garment.size as SizeTag;
    case "pants":
      return getSizeTagFromNumericSize(
        garment.size as number,
        pantsSizeRange.min,
        pantsSizeRange.max
      );
    case "shoes":
      return getSizeTagFromNumericSize(
        garment.size as number,
        shoesSizeRange.min,
        shoesSizeRange.max
      );
  }
};

// should come from server instead hardcoded
const shoesSizeRange: { min: number; max: number } = {
  min: 35,
  max: 46,
};
const pantsSizeRange: { min: number; max: number } = {
  min: 29,
  max: 48,
};
