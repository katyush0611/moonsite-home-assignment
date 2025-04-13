import { Card } from "antd";
import { Garment, GarmentType } from "../../models/garment.model";
import classes from "./GarmentsListItem.module.scss";
import { ShirtSVG } from "../../assets/images/ShirtSVG";
import { PantSVG } from "../../assets/images/PantsSVG";
import { ShoesSVG } from "../../assets/images/ShoesSVG";

interface OwnProps {
  isSelected: boolean;
  disabled: boolean;
  garment: Garment<GarmentType>;
  toggleSelected: () => void;
}

const garmentImage = (garment: Garment) => {
  switch (garment.type) {
    case "shirt":
      return <ShirtSVG fill={garment.color} />;
      break;
    case "pants":
      return <PantSVG fill={garment.color} />;
      break;
    case "shoes":
      return <ShoesSVG fill={garment.color} />;
      break;
  }
};

const GarmentListItem: React.FC<OwnProps> = ({
  garment,
  disabled,
  isSelected,
  toggleSelected,
}) => {
  return (
    <Card
      hoverable
      className={`${classes.Card} ${isSelected && classes.Selected} ${
        disabled && classes.Disabled
      }`}
      onClick={toggleSelected}
      cover={garmentImage(garment)}
    >
      <Card.Meta
        title={garment.brand}
        description={`size: ${garment.size} & color: ${garment.color}`}
      />
    </Card>
  );
};

export default GarmentListItem;
