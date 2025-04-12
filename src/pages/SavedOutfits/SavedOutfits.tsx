import { Flex, Typography, Card, Space, Button } from "antd";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { Outfit } from "../../models/outfit.model";
import { AppDispatch } from "../../store/store";
import { DeleteOutlined } from "@ant-design/icons";
const SavedOutfits: React.FC = () => {
  let navigate = useNavigate();
  //@ts-ignore
  const dispatch = useAppDispatch<AppDispatch>();
  const outfitsState = useAppSelector((state) => state.outfitsStore);
  console.log(outfitsState);
  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      {outfitsState.outfits.map((outfit: Outfit) => (
        <Card
          key={outfit.id}
          title={`Outfit Id - ${outfit.id}`}
          size="small"
          extra={[
            <Button
              type="primary"
              icon={<DeleteOutlined />}
              onClick={() => console.log("delete outfit:", outfit)}
            />,
          ]}
        >
          <Flex gap="middle">
            <Flex vertical>
              <p>
                <Typography.Text mark>[Shirt]</Typography.Text>{" "}
                {outfit.shirt.brand}
              </p>
              <p>
                <Typography.Text mark>[Pants]</Typography.Text>{" "}
                {outfit.pants.brand}
              </p>
              <p>
                <Typography.Text mark>[Shoes]</Typography.Text>{" "}
                {outfit.shoes.brand}
              </p>
            </Flex>
            <Flex vertical>
              <p>{outfit.shirt.size}</p>
              <p>{outfit.pants.size}</p>
              <p>{outfit.shoes.size}</p>
            </Flex>
            <Flex vertical>
              <p>{outfit.shirt.color}</p>
              <p>{outfit.pants.color}</p>
              <p>{outfit.shoes.color}</p>
            </Flex>
          </Flex>
        </Card>
      ))}
    </Space>
    // <List
    //   header={<div>Saved Outfits</div>}
    //   bordered
    //   dataSource={outfitsState.outfits}
    //   renderItem={(outfit: Outfit) => (
    //     <List.Item>
    //       <Typography.Text mark>[Shirt]</Typography.Text> {outfit.shirt.brand}
    //       <Typography.Text mark>[Pants]</Typography.Text> {outfit.pants.brand}
    //       <Typography.Text mark>[Shoes]</Typography.Text> {outfit.shoes.brand}
    //     </List.Item>
    //   )}
    // />
  );
};

export default SavedOutfits;
