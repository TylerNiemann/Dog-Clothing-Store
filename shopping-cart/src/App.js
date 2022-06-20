import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/components/Home" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
