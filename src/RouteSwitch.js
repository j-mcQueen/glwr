import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Audio from "./audio/Audio";
import Visual from "./visual/Visual";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/visual" element={<Visual />} />
      </Routes>
    </BrowserRouter>
  );
};