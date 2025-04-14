import React, { useEffect, useState } from "react";
import { Button, Steps } from "antd";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { useLocation, useNavigate } from "react-router";
import classes from "./OutfitBuilder.module.scss";
import { saveOutfit } from "../../store/outfits/outfits.actions";
import { useOutfitBuilderSteps } from "./hooks/useOutfitBuilderSteps";
import { useOutfitSelection } from "./hooks/useOutfitSelection";
import { GarmentType } from "../../models/garment.model";

const OutfitBuilder: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialStep = location.state?.initialStep;
  const dispatch = useAppDispatch();
  const garmentsState = useAppSelector((state) => state.garmentsStore);

  const [current, setCurrent] = useState<number>(0);
  const [nextType, setNextType] = useState<GarmentType>("pants");

  const next = (): void => {
    if (current < steps.length - 1) setCurrent(current + 1);
  };

  const { outfit, recommendedColors, recommendedSizes, onSelectGarment } =
    useOutfitSelection(garmentsState, nextType, next);

  const { steps, stepItems } = useOutfitBuilderSteps({
    outfit,
    initialStep,
    garmentsState,
    recommendedSizes,
    recommendedColors,
    onSelectGarment,
  });
  useEffect(() => {
    console.log(recommendedSizes);
  }, [recommendedSizes]);

  useEffect(() => {
    setNextType(steps[current + 1]?.key as GarmentType);
  }, [steps]);

  const onSaveOutfit = (): void => {
    dispatch(saveOutfit(outfit));
    navigate("/saved");
  };

  return (
    <>
      <Steps current={current} items={stepItems} onChange={setCurrent} />
      <div className={classes.Content}>{steps[current].content}</div>
      <div className={classes.StepActions}>
        {current < stepItems.length - 1 && (
          <Button type="primary" onClick={next} children="Next" />
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={onSaveOutfit}
            disabled={!(outfit.shirt && outfit.pants && outfit.shoes)}
            children="Done"
          />
        )}
        {current > 0 && (
          <Button
            className={classes.PrevButton}
            onClick={() => setCurrent(current - 1)}
            children="Previous"
          />
        )}
      </div>
    </>
  );
};

export default OutfitBuilder;
