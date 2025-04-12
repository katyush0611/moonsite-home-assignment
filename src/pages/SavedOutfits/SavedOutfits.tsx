import { List, Flex, Typography, Card, Space, Button } from "antd";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { AppDispatch } from "../../store/store";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteOutfit } from "../../store/outfits/outfits.actions";

const SavedOutfits: React.FC = () => {
  //@ts-ignore
  const dispatch = useAppDispatch<AppDispatch>();
  const outfitsState = useAppSelector((state) => state.outfitsStore);
  return (
    <List
      dataSource={outfitsState.outfits}
      style={{ height: "100%", overflowY: "scroll" }}
      renderItem={(outfit) => (
        <List.Item key={outfit.id}>
          <Card
            title={`Outfit Id - ${outfit.id}`}
            style={{ width: "100%" }}
            extra={[
              <Button
                key={"delete-button"}
                type="primary"
                icon={<DeleteOutlined />}
                onClick={() => dispatch(deleteOutfit(outfit))}
              />,
            ]}
          >
            <Flex gap="middle" justify="space-between" style={{ width: "75%" }}>
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
        </List.Item>
      )}
    />
  );
};

export default SavedOutfits;
