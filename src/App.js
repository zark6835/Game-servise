import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeHeder from './components/Heder/HomeHeder';
import MainSlider from './components/MainSlider/MainSlider';


function App() {
  return (
    <div className='Add'>
      <HomeHeder/>
      <MainSlider/>

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
