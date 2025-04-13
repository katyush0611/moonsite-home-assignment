import { useEffect, useState } from "react";

export const useFilters = (initialFilters: {
  barnds: string[];
  colors: string[];
  sizes: (string | number)[];
}) => {
  const [brandFilters, setBrandFilters] = useState<string[]>([]);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sizeFilters, setSizeFilters] = useState<(string | number)[]>([]);

  useEffect(() => {
    setBrandFilters(initialFilters.barnds);
    setColorFilters(initialFilters.colors);
    setSizeFilters(initialFilters.sizes);
  }, [initialFilters]);

  return {
    brandFilters,
    setBrandFilters,
    colorFilters,
    setColorFilters,
    sizeFilters,
    setSizeFilters,
  };
};
