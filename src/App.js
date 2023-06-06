import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages/index";
import Footer from "./components/Footer/Footer";
import MobilePages from "./pages/Services/MobilePages";
import GamePages from "./pages/Services/GamePages";
import VrPages from "./pages/Services/VrPages";
import DedicatedPages from "./pages/Services/DedicatedPages";
import SdkPages from "./pages/Services/SdkPages";
import SdkModelingsPages from "./pages/Services/SdkModelingsPages";
import AppPages from "./pages/Services/AppPages";
import AndroidPages from "./pages/Technologies/AndroidPages";
import IosPages from "./pages/Technologies/IosPages";
import UnityPages from "./pages/Technologies/UnityPages";
import ProductsPages from "./pages/Products/ProductsPages";
import PortfolioPages from "./pages/Portfolio/PortfolioPages";

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
          <Route path="/android-technologies" element={<AndroidPages />} />
          <Route path="/ios-technologies" element={<IosPages />} />
          <Route path="/unity-technologies" element={<UnityPages />} />
          <Route path="/assets-products" element={<ProductsPages />} />
          <Route path="/portfolio" element={<PortfolioPages/>} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
