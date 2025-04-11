import React, { useState, useEffect } from "react";
import { Button, Steps } from "antd";
import GarmentsList from "../../components/GarmentsList/GarmentsList";
import { Garment, GarmentType } from "../../models/garment.model";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import type { AppDispatch } from "../../store/store";
import { useNavigate } from "react-router";
import classes from "./OutfitBuilder.module.scss";
import { Outfit } from "../../models/outfit.model";
import { saveOutfit } from "../../store/outfits/outfits.actions";

const OutfitBuilder: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [outfit, setOutfit] = useState<Outfit>({} as Outfit);
  let navigate = useNavigate();
  //@ts-ignore
  const dispatch = useAppDispatch<AppDispatch>();
  const garmentsState = useAppSelector((state) => state.garmentsStore);
  const outfitsState = useAppSelector((state) => state.outfitsStore);
  console.log("OutfitBuilderPage", garmentsState);
  useEffect(() => {
    console.log(garmentsState);
  }, []);

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
      title: "Shirts",
      content: (
        <GarmentsList
          garments={garmentsState.shirts.all}
          disabledIds={garmentsState.shirts.selected}
          selectedGarmentId={outfit?.shirt?.id}
          setSelectedGarment={onSelectGarment}
        />
      ),
    },
    {
      title: "Pants",
      content: (
        <GarmentsList
          garments={garmentsState.pants.all}
          disabledIds={garmentsState.pants.selected}
          selectedGarmentId={outfit?.pants?.id}
          setSelectedGarment={onSelectGarment}
        />
      ),
    },
    {
      title: "Shoes",
      content: (
        <GarmentsList
          garments={garmentsState.shoes.all}
          disabledIds={garmentsState.shoes.selected}
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
    // console.log(outfit);
  };

  const items = outfitBuilderSteps().map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
      <Steps current={current} items={items} />
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
