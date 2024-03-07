import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Sidemenu from "./components/Sidemenu";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Sidemenu />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/Reg" element={<Register />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
