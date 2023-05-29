import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages/index";
import Footer from "./components/Footer/Footer";
import MobilePages from "./pages/MobilePages";
import GamePages from "./pages/GamePages";
import VrPages from "./pages/VrPages";
import DedicatedPages from "./pages/DedicatedPages";
import SdkPages from "./pages/SdkPages";
import SdkModelingsPages from "./pages/SdkModelingsPages";
import AppPages from "./pages/AppPages";

function App() {
  return (
    <div className="Add">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mobile-devrlopment" element={<MobilePages />} />
          <Route path="/game-devrlopment" element={<GamePages />} />
          <Route path="/vr-devrlopment" element={<VrPages />} />
          <Route path="/dedicated-devrlopment" element={<DedicatedPages />} />
          <Route path="/sdk-devrlopment" element={<SdkPages />} />
          <Route path="/sdk-modelings" element={<SdkModelingsPages />} />
          <Route path="/app-devrlopment" element={<AppPages />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
