import { GarmentType } from "../models/garment.model";

type RecommendationMap = {
  [key: string]: {
    shirts?: string[];
    pants?: number[];
    shoes?: number[];
  };
};

const shirtBasedRecommendation: RecommendationMap = {
  S: { pants: [30, 31], shoes: [36, 37] },
  L: { pants: [36, 39], shoes: [43] },
  XL: { pants: [42, 43], shoes: [45] },
  XXL: { pants: [48], shoes: [46] },
};

const pantsBasedRecommendation: RecommendationMap = {
  30: { shirts: ["S"], shoes: [36, 37] },
  31: { shirts: ["S"], shoes: [36, 37] },
  32: { shirts: ["M"], shoes: [37, 39] },
  34: { shirts: ["M"], shoes: [39] },
  35: { shirts: ["M"], shoes: [39] },
  36: { shirts: ["L"], shoes: [43] },
  39: { shirts: ["L"], shoes: [43] },
  42: { shirts: ["XL"], shoes: [45] },
  43: { shirts: ["XL"], shoes: [45] },
  48: { shirts: ["XXL"], shoes: [46] },
};

const shoesBasedRecommendation: RecommendationMap = {
  36: { shirts: ["S"], pants: [30, 31] },
  37: { shirts: ["S"], pants: [30, 31] },
  39: { shirts: ["M"], pants: [32, 34, 35] },
  43: { shirts: ["L"], pants: [36, 39] },
  45: { shirts: ["XL"], pants: [42, 43] },
  46: { shirts: ["XXL"], pants: [48] },
};

export const recommendFromGarmentSize = (
  type: GarmentType,
  size: string | number
): { pants?: number[]; shoes?: number[]; shirts?: string[] } | null => {
  switch (type) {
    case "shirt":
      return {
        pants: shirtBasedRecommendation[size].pants || [],
        shoes: shirtBasedRecommendation[size].shoes || [],
      };
    case "pants":
      return {
        shirts: pantsBasedRecommendation[size].shirts || [],
        shoes: pantsBasedRecommendation[size].shoes || [],
      };
    case "shoes":
      return {
        pants: shoesBasedRecommendation[size].pants || [],
        shirts: shoesBasedRecommendation[size].shirts || [],
      };
  }
};
