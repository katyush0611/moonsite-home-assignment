import React, { useState } from "react";
import { Button, Steps } from "antd";
import GarmentsList from "../../components/GarmentsList/GarmentsList";
import { Garment, GarmentType } from "../../models/garment.model";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import type { AppDispatch } from "../../store/store";
import { useLocation, useNavigate } from "react-router";
import classes from "./OutfitBuilder.module.scss";
import { Outfit } from "../../models/outfit.model";
import { saveOutfit } from "../../store/outfits/outfits.actions";
import { StepsProps } from "antd/lib";

const OutfitBuilder: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [current, setCurrent] = useState(location.state?.initialStep || 0);
  const [outfit, setOutfit] = useState<Outfit>({} as Outfit);

  //@ts-ignore
  const dispatch = useAppDispatch<AppDispatch>();
  const garmentsState = useAppSelector((state) => state.garmentsStore);
  const onSelectGarment = (garment: Garment<GarmentType>): void => {
    switch (garment.type) {
      case "shirt":
        setOutfit({ ...outfit, shirt: garment as Garment<"shirt"> });
        break;
      case "pants":
        setOutfit({ ...outfit, pants: garment as Garment<"pants"> });
        break;
      case "shoes":
        setOutfit({ ...outfit, shoes: garment as Garment<"shoes"> });
        break;
    }
  };
  const outfitBuilderSteps = () => [
    {
      key: "shirts",
      title: "Shirts",
      content: (
        <GarmentsList
          garments={garmentsState.shirts.garments}
          filters={{
            barnds: garmentsState.shirts.brands,
            colors: garmentsState.shirts.colors,
            sizes: garmentsState.shirts.sizes,
          }}
          disabledIds={garmentsState.usedGarmentIds}
          selectedGarmentId={outfit?.shirt?.id}
          setSelectedGarment={onSelectGarment}
        />
      ),
    },
    {
      key: "pants",
      title: "Pants",
      content: (
        <GarmentsList
          garments={garmentsState.pants.garments}
          filters={{
            barnds: garmentsState.pants.brands,
            colors: garmentsState.pants.colors,
            sizes: garmentsState.pants.sizes,
          }}
          disabledIds={garmentsState.usedGarmentIds}
          selectedGarmentId={outfit?.pants?.id}
          setSelectedGarment={onSelectGarment}
        />
      ),
    },
    {
      key: "shoes",
      title: "Shoes",
      content: (
        <GarmentsList
          garments={garmentsState.shoes.garments}
          filters={{
            barnds: garmentsState.shoes.brands,
            colors: garmentsState.shoes.colors,
            sizes: garmentsState.shoes.sizes,
          }}
          disabledIds={garmentsState.usedGarmentIds}
          selectedGarmentId={outfit?.shoes?.id}
          setSelectedGarment={onSelectGarment}
        />
      ),
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onSaveOutfit = (): void => {
    dispatch(saveOutfit(outfit));
    navigate("/saved");
  };
  const items = outfitBuilderSteps().map(
    (item) =>
      ({
        key: item.key,
        title: item.title,
        status: "process",
      } as StepsProps)
  );

  return (
    <>
      <Steps current={current} items={items} onChange={setCurrent} />
      <div className={classes.Content}>
        {outfitBuilderSteps()[current].content}
      </div>
      <div style={{ marginTop: 24 }}>
        {current < outfitBuilderSteps().length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === outfitBuilderSteps().length - 1 && (
          <Button
            type="primary"
            onClick={onSaveOutfit}
            disabled={!(outfit.shirt && outfit.pants && outfit.shoes)}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default OutfitBuilder;
