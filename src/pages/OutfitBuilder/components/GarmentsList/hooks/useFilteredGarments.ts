import { useEffect, useState } from "react";
import { Garment } from "../../../../../models/garment.model";
import { sortBySizeRecommendations } from "../../../../../utils/recommendations.util";

export const useFilteredGarments = (
  garments: Garment[],
  brandFilters: string[],
  colorFilters: string[],
  sizeFilters: (string | number)[],
  recommendations: { colors: string[]; sizes: (string | number)[] }
) => {
  const [filteredGarments, setFilteredGarments] = useState<Garment[]>([]);

  useEffect(() => {
    const result = garments.filter((garment) => {
      return (
        brandFilters.includes(garment.brand) &&
        colorFilters.includes(garment.color) &&
        sizeFilters.includes(garment.size)
      );
    });

    setFilteredGarments(
      sortBySizeRecommendations(
        result.sort(
          (a, b) =>
            recommendations.colors.slice().reverse().indexOf(b.color) -
            recommendations.colors.slice().reverse().indexOf(a.color)
        ),
        recommendations.sizes as number[]
      )
    );
  }, [garments, brandFilters, colorFilters, sizeFilters, recommendations]);

  return filteredGarments;
};
