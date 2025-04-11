import { Flex } from "antd";
import { Garment, GarmentType } from "../../models/garment.model";
import GarmentListItem from "../GarmentListItem/GarmentListItem";

interface OwnProps {
  garments: Garment<GarmentType>[];
  disabledIds: number[];
  selectedGarmentId: number;
  setSelectedGarment: (garment: Garment<GarmentType>) => void;
}

const GarmentsList: React.FC<OwnProps> = ({
  garments,
  disabledIds,
  selectedGarmentId,
  setSelectedGarment,
}: OwnProps) => {
  return (
    <Flex gap="middle" align="center" justify="space-evenlly" wrap>
      {garments?.map((garment) => (
        <GarmentListItem
          key={garment.id}
          disabled={!!disabledIds.find((id) => id === garment.id)}
          garment={garment}
          isSelected={garment.id === selectedGarmentId}
          toggleSelected={() => setSelectedGarment(garment)}
        />
      ))}
    </Flex>
  );
};

export default GarmentsList;
