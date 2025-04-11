import { Flex } from "antd";
import { Garment, GarmentType } from "../../models/garment.model";
import GarmentListItem from "../GarmentListItem/GarmentListItem";

interface OwnProps {
  garments: Garment<GarmentType>[];
}

const GarmentsList: React.FC<OwnProps> = ({ garments }: OwnProps) => {
  console.log("GarmentsList Component", garments);
  return (
    <Flex gap="middle" align="center" justify="space-evenlly" wrap>
      {garments.map((garment) => (
        <GarmentListItem
          garment={garment}
          isSelected={garment.id === 26}
          toggleSelected={console.log}
        />
      ))}
    </Flex>
  );
};

export default GarmentsList;
