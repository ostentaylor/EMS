import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Register from './pages/Register';
import './App.css'

function App() {
  return (
    <div>
      <Routes>
      
          <Route exact path="/" element={<Main/>} />
          <Route path="/Reg" element={<Register/>} />
        
      </Routes>
    </div>
  );
}

export default App