import { List, Typography } from "antd";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { Outfit } from "../../models/outfit.model";
import { AppDispatch } from "../../store/store";

const SavedOutfits: React.FC = () => {
  let navigate = useNavigate();
  //@ts-ignore
  const dispatch = useAppDispatch<AppDispatch>();
  const outfitsState = useAppSelector((state) => state.outfitsStore);
  console.log(outfitsState);
  return (
    <List
      header={<div>Saved Outfits</div>}
      bordered
      dataSource={outfitsState.outfits}
      renderItem={(outfit: Outfit) => (
        <List.Item>
          <Typography.Text mark>[Shirt]</Typography.Text> {outfit.shirt.brand}
          <Typography.Text mark>[Pants]</Typography.Text> {outfit.pants.brand}
          <Typography.Text mark>[Shoes]</Typography.Text> {outfit.shoes.brand}
        </List.Item>
      )}
    />
  );
};

export default SavedOutfits;
