import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages/index";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="Add">
      <Index/>
      <Footer />
    </div>
  );
}

export default App;
