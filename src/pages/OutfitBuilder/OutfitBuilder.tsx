import React, { useState, useEffect } from "react";
import { Button, message, Steps, theme } from "antd";
import GarmentsList from "../../components/GarmentsList/GarmentsList";
import { Garment, GarmentType } from "../../models/garment.model";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import type { AppDispatch } from "../../store/store";
import { useNavigate } from "react-router";

const OutfitBuilder: React.FC = () => {
  console.log("OutfitBuilderPage");
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  let navigate = useNavigate();

  const dispatch = useAppDispatch<AppDispatch>();
  const garmentsState = useAppSelector((state) => state.garmentsStore);

  useEffect(() => {
    console.log(garmentsState);
  }, []);

  const outfitBuilderSteps = () => [
    {
      title: "Shirts",
      content: <GarmentsList garments={garmentsState.shirts} />,
    },
    {
      title: "Pants",
      content: <GarmentsList garments={garmentsState.pants} />,
    },
    {
      title: "Shoes",
      content: <GarmentsList garments={garmentsState.shoes} />,
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = outfitBuilderSteps().map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    overflowY: "scroll",
    height: "85%",
  };

  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{outfitBuilderSteps()[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < outfitBuilderSteps().length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === outfitBuilderSteps().length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
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
