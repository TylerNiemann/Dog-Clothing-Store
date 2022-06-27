import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import rootItems from "./rootItems";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/components/Home" element={<Home />} />
      <Route path="/components/Products" element={<Products items = {rootItems}/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
