import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeHeder from "./components/Heder/HomeHeder";
import MainSlider from "./components/MainSlider/MainSlider";
import Footer from "./components/Footer/Footer";
import Technologies from "./components/Technologies/Technologies";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";
import Partner from "./components/Partner/Partner";
import Achievements from "./components/Achievements/Achievements";

function App() {
  return (
    <div className="Add">
      <HomeHeder />
      <main>
        <MainSlider />
        <Technologies/>
        <Reviews/>
        <Services/>
        <Partner/>
        <Achievements/>
      </main>
      <Footer />
      {/* 
      <Router>
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/userlist" element={<UserList />} />
        </Routes>
      </Router>
      */}
    </div>
  );
}

export default App;
