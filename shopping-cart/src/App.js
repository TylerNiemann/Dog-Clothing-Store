import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";
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

  const calculateLength = (cart) => {
    return cart.reduce((prev, curr) => prev + curr.qty,  0)
  }

  useEffect(() => {
    setCartSize(calculateLength(cart));
    setTotal(calculateTotal(cart).toFixed(2));
 },[cart])

  const addcartItem = (newItem) => {
    if(cart.find(item => item.itemName === newItem.itemName)){
      addQuantity(cart.find(item => item.itemName === newItem.itemName));
    }
    else setCart([...cart, newItem]);
  }

  const removecartItem = (oldItem) => {
    if((cart.find(item => item.itemName === oldItem.itemName).qty > 1)){
     lowerQuantity(cart.find(item => item.itemName === oldItem.itemName))
    }
    else setCart(cart.filter(item => item.itemName !== oldItem.itemName));
  }

  const emptyCart = () => {
    setCart([]);
  }

  const addQuantity = (index) => {
    index.qty += 1;
    setTotal(calculateTotal(cart).toFixed(2));
    setCartSize(calculateLength(cart));
  }

  const lowerQuantity = (index) => {
    index.qty -= 1;
    setTotal(calculateTotal(cart).toFixed(2));
    setCartSize(calculateLength(cart));
  }

  return (
    <BrowserRouter basename="Shopping-cart" >
      <Navbar cart = {cartSize} />
    <Routes>
      <Route path="/" element={<Navigate to="/components/Home"/>} />
      <Route path="/components/Home" element={<Home />} />
      <Route path="/components/Products" element={<Products  addcartItem = {addcartItem}  items = {rootItems}/> }/>
      <Route path="/components/ShoppingCart" element={<ShoppingCart emptyCart = {emptyCart}  lower = {removecartItem}  cart = {cart} total = {total} />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
