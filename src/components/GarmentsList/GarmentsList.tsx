import { Flex, Select } from "antd";
import { Garment, GarmentType } from "../../models/garment.model";
import GarmentListItem from "../GarmentListItem/GarmentListItem";
import { useEffect, useState } from "react";

interface OwnProps<S = string | number> {
  garments: Garment<GarmentType>[];
  filters: { barnds: string[]; colors: string[]; sizes: S[] };
  disabledIds: number[];
  selectedGarmentId: number;
  setSelectedGarment: (garment: Garment<GarmentType>) => void;
}

const GarmentsList: React.FC<OwnProps> = ({
  garments,
  filters,
  disabledIds,
  selectedGarmentId,
  setSelectedGarment,
}: OwnProps) => {
  const { barnds, colors, sizes } = filters;

  const [filteredGarments, setFilteredGarments] = useState<Garment[]>([]);
  const [brandFilters, setBrandFilters] = useState<string[]>([]);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sizeFilters, setSizeFilters] = useState<(string | number)[]>([]);

  useEffect(() => {
    setBrandFilters(barnds);
    setColorFilters(colors);
    setSizeFilters(sizes);
  }, [filters]);

  console.log("garments1: ", garments);
  useEffect(() => {
    const newFilteredGarments = garments.filter((garment) => {
      return (
        brandFilters.includes(garment.brand) &&
        colorFilters.includes(garment.color) &&
        sizeFilters.includes(garment.size)
      );
    });

    setFilteredGarments(newFilteredGarments);
  }, [garments, brandFilters, colorFilters, sizeFilters]);

  return (
    <>
      <Flex gap={"small"} justify="flex-start">
        <Select
          mode="multiple"
          allowClear
          placeholder="By Brand"
          style={{ width: "100%" }}
          onChange={(val) => setBrandFilters(val.length ? val : barnds)}
          options={barnds.map((brand) => {
            return { value: brand, title: brand };
          })}
        />
        <Select
          mode="multiple"
          allowClear
          placeholder="By Color"
          style={{ width: "100%" }}
          onChange={(val) => setColorFilters(val.length ? val : colors)}
          options={colors.map((color) => {
            return { value: color, title: color };
          })}
        />
        <Select
          mode="multiple"
          allowClear
          placeholder="By Size"
          style={{ width: "100%" }}
          onChange={(val) => setSizeFilters(val.length ? val : sizes)}
          //@ts-ignore
          options={sizes.map((size) => {
            return { value: size, title: size };
          })}
        />
      </Flex>
      <Flex gap="middle" align="center" justify="space-evenlly" wrap>
        {filteredGarments?.map((garment) => (
          <GarmentListItem
            key={garment.id}
            disabled={!!disabledIds.find((id) => id === garment.id)}
            garment={garment}
            isSelected={garment.id === selectedGarmentId}
            toggleSelected={() => setSelectedGarment(garment)}
          />
        ))}
      </Flex>
    </>
  );
};

export default GarmentsList;
