import { Card } from "antd";
import { Garment, GarmentType } from "../../models/garment.model";
import shoeslogo from "../../assets/images/shoes.png";
import pantslogo from "../../assets/images/pants.png";
import shirtslogo from "../../assets/images/shirt.png";
import classes from "./GarmentsListItem.module.scss";

interface OwnProps {
  isSelected: boolean;
  disabled: boolean;
  garment: Garment<GarmentType>;
  toggleSelected: () => void;
}

const garmentImage = (type: GarmentType): string => {
  switch (type) {
    case "shirt":
      return shirtslogo;
      break;
    case "pants":
      return pantslogo;
      break;
    case "shoes":
      return shoeslogo;
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
      cover={<img alt="example" src={garmentImage(garment.type)} />}
    >
      <Card.Meta
        title={garment.brand}
        description={`size: ${garment.size} & color: ${garment.color}`}
      />
    </Card>
  );
};

export default GarmentListItem;
