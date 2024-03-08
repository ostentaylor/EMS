import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";


import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route exact path="/" element={<Main />} />
      
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
