import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeHeder from './components/Heder/HomeHeder';
import IndexHeder from './components/Heder/IndexHeder';

function App() {
  return (
    <div className='Add'>
      <HomeHeder/>
    <IndexHeder/>
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
