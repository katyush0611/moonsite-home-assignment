import { Flex, Select } from "antd";
import GarmentListItem from "../GarmentListItem/GarmentListItem";
import { Garment, GarmentType } from "../../../../models/garment.model";
import { useFilters } from "./hooks/useFilters";
import { useFilteredGarments } from "./hooks/useFilteredGarments";
import { BaseOptionType } from "antd/es/select";

interface OwnProps<S = string | number> {
  garments: Garment<GarmentType>[];
  filters: { barnds: string[]; colors: string[]; sizes: S[] };
  disabledIds: number[];
  recommendations?: { colors: string[]; sizes: (string | number)[] };
  selectedGarmentId: number;
  setSelectedGarment: (garment: Garment<GarmentType>) => void;
}

const GarmentsList: React.FC<OwnProps> = ({
  garments,
  filters,
  disabledIds,
  recommendations = { colors: [], sizes: [] },
  selectedGarmentId,
  setSelectedGarment,
}: OwnProps) => {
  const { barnds, colors, sizes } = filters;

  const {
    brandFilters,
    setBrandFilters,
    colorFilters,
    setColorFilters,
    sizeFilters,
    setSizeFilters,
  } = useFilters(filters);

  const filteredGarments = useFilteredGarments(
    garments,
    brandFilters,
    colorFilters,
    sizeFilters,
    recommendations
  );

  const onGarmentSelected = (garment: Garment): void => {
    setSelectedGarment(garment);
  };

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
          options={sizes.map((size) => {
            return { value: size, title: size } as BaseOptionType;
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
            toggleSelected={() => onGarmentSelected(garment)}
          />
        ))}
      </Flex>
    </>
  );
};

export default GarmentsList;
