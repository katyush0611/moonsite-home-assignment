import { Button, Card, Row, Col, Typography, Badge } from "antd";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../utils/hooks";
import { GarmentType } from "../../models/garment.model";
import { GarmentsState } from "../../store/garments/garments.types";
import { OutfitsState } from "../../store/outfits/outfits.types";
const { Title, Text } = Typography;

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const garmentsState = useAppSelector<GarmentsState>(
    (state) => state.garmentsStore
  );
  const outfitsState = useAppSelector<OutfitsState>(
    (state) => state.outfitsStore
  );

  const navigateToOutfitBuilder = (type: GarmentType): void => {
    navigate("/outfit-builder", { state: { initialStep: type } });
  };

  return (
    <div style={{ padding: 24 }}>
      <Button onClick={() => navigate("/saved")}>
        <Badge showZero offset={[15, 10]} count={outfitsState.outfits.length}>
          <Text>Saved Outfits</Text>
        </Badge>
      </Button>

      <Card style={{ marginTop: 24 }}>
        <Title level={4}>Availability</Title>
        <Row gutter={16}>
          <Col>
            <Badge
              count={
                garmentsState.shoes.garments.length -
                outfitsState.outfits.length
              }
            >
              <Text>Shoes</Text>
            </Badge>
          </Col>
          <Col>
            <Badge
              count={
                garmentsState.shirts.garments.length -
                outfitsState.outfits.length
              }
            >
              <Text>Shirts</Text>
            </Badge>
          </Col>
          <Col>
            <Badge
              count={
                garmentsState.pants.garments.length -
                outfitsState.outfits.length
              }
            >
              <Text>Pants</Text>
            </Badge>
          </Col>
        </Row>
      </Card>

      <Card style={{ marginTop: 24 }}>
        <Row gutter={16}>
          <Col>
            <Button onClick={() => navigateToOutfitBuilder("shirt")}>
              Select Shirt
            </Button>
          </Col>
          <Col>
            <Button onClick={() => navigateToOutfitBuilder("pants")}>
              Select Pants
            </Button>
          </Col>
          <Col>
            <Button onClick={() => navigateToOutfitBuilder("shoes")}>
              Select Shoes
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default HomePage;
