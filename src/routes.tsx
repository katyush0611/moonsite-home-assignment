import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import SavedOutfits from "./pages/SavedOutfits/SavedOutfits";
import OutfitBuilder from "./pages/OutfitBuilder/OutfitBuilder";

const AppRouting: React.FC<{}> = (props: {}) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/saved" element={<SavedOutfits />} />
      <Route path="/outfit-builder" element={<OutfitBuilder />} />
    </Routes>
  );
};

export default AppRouting;
