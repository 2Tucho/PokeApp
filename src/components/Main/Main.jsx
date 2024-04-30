import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";

const Main = () => {
  return (
  <main className="main">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  </main>
  );
};

export default Main;
