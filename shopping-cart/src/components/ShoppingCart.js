import React from "react";
import ListCartItem from "./ListCartItem";
import "../styles/listproductitems.css";
import { useNavigate } from "react-router-dom";

function ShoppingCart({ emptyCart, lower, total, cart }) {
  const empty = () => emptyCart();
  const navigate = useNavigate();

  return (
    <div id="cartProducts">
      {cart.map((item) => (
        <ListCartItem lower={lower} key={item.id} {...item} />
      ))}
      <h1>Total: ${total}</h1>
      <div id="buttonContainer">
        <button onClick={empty}>Empty Cart</button>
        <button onClick={() => navigate("../components/Products")}>
          Continue Shopping
        </button>
      </div>
      <form action="/create-checkout-session" method="POST">
        <input type="hidden" name="total" value={total} />
        <button id="completeOrder" type="submit">
          Complete Order
        </button>
      </form>
    </div>
  );
}

export default ShoppingCart;