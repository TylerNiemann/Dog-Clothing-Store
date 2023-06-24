import React, {useState, useEffect} from "react";
import { HashRouter, Routes, Route ,Navigate } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail"
import Navbar from "./components/Navbar";
import rootItems from "./rootItems";
import ShoppingCart from "./components/ShoppingCart";
import Success from "./components/Success"
import { useAuth, signIn } from "./components/SignIn";
import { calculateTotal, calculateLength } from "./components/utils/cartUtils";
import {
  addCartItem,
  removeCartItem,
  setUserCart,
  onCartSnapshot,
  deleteCartItem
} from "./components/utils/firestoreUtils";

function App() {
  const auth = useAuth();
  const [cart, setCart] = useState([]);
  const [cartSize, setCartSize] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (auth) {
      const unsubscribe = onCartSnapshot(auth.uid, (cart) => {
        setCart(cart);
        setTotal(calculateTotal(cart).toFixed(2));
        setCartSize(calculateLength(cart));
      });

      return () => unsubscribe();
    }
  }, [auth]);

  const addItemToCart = (newItem, quantity) => {
    if (auth) {
      addCartItem(auth.uid, newItem, quantity);
    } else {
      signIn();
    }
  };

  const removeItemFromCart = (item) => {
    if (auth) {
      removeCartItem(auth.uid, item);
    }
  };

  const deleteItemFromCart = (item) => {
    if (auth) {
      deleteCartItem(auth.uid, item);
    }
  };


  const emptyCart = () => {
    if (auth) {
      setUserCart(auth.uid, []);
    }
  };

  return (
    <HashRouter>
      <Navbar cart = {cartSize} />
    <Routes>
      <Route path="/" element={<Navigate to="/components/Home"/>} />
      <Route path="/components/Home" element={<Home />} />
      <Route path="/components/Products" element={<Products  addcartItem = {addItemToCart}  items = {rootItems}/> }/>
      <Route path="/components/Products/:index" element={<ProductDetail  addcartItem = {addItemToCart}  items = {rootItems}/> }/>
      <Route path="/components/ShoppingCart" element={<ShoppingCart emptyCart = {emptyCart}  lower = {removeItemFromCart}  remove = {deleteItemFromCart} cart = {cart} total = {total} />} />
      <Route path="/components/Success" element={<Success emptyCart = {emptyCart} />} />
    </Routes>
  </HashRouter>
  );
}

export default App;
