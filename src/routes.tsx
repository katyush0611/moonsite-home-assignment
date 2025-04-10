import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";

const AppRouting: React.FC<{}> = (props: {}) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouting;
