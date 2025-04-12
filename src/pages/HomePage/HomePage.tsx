import { Button, Card, Row, Col, Typography, Badge } from "antd";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../utils/hooks";
const { Title, Text } = Typography;

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const garmentsState = useAppSelector((state) => state.garmentsStore);
  const outfitsState = useAppSelector((state) => state.outfitsStore);

  const navigateToOutfitBuilder = (index: number): void => {
    navigate("/outfit-builder", { state: { initialStep: index } });
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
            <Button onClick={() => navigateToOutfitBuilder(0)}>
              Select Shirt
            </Button>
          </Col>
          <Col>
            <Button onClick={() => navigateToOutfitBuilder(1)}>
              Select Pants
            </Button>
          </Col>
          <Col>
            <Button onClick={() => navigateToOutfitBuilder(2)}>
              Select Shoes
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default HomePage;
