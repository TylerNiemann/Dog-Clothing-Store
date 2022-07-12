import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import rootItems from "./rootItems";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [cart, setCart] = useState([]);
  const [cartSize, setCartSize] = useState(0);
  const [total,setTotal] = useState(0);

  const calculateTotal = (cart) => {  
    return cart.reduce((prev, curr) => prev + (curr.qty * curr.price),  0)
  }
  
 useEffect(() => {
  setCartSize(cart.length)
  setTotal(calculateTotal(cart));
 },[cart, cart.length])

  const addcartItem = (newItem) => {
    setCart([...cart, newItem]);
  }



  return (
    <BrowserRouter>
      <Navbar cart = {cartSize} />
    <Routes>
      <Route path="/components/Home" element={<Home />} />
      <Route path="/components/Products" element={<Products  addcartItem = {addcartItem}  items = {rootItems}/> }/>
      <Route path="/components/ShoppingCart" element={<ShoppingCart cart = {cart} total = {total} />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
