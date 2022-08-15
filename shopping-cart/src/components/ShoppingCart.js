import React from "react";
import ListCartItem from "./ListCartItem";
import "../styles/listproductitems.css"
import { useNavigate} from "react-router-dom";


function ShoppingCart({emptyCart,lower,total,cart}){
    
    const empty = () => emptyCart();

    const navigate = useNavigate();

    const completeOrder = () =>{
        if(cart.length === 0){
            alert("Cart is empty")
        }
        else {
            empty();
            alert("Your Order is complete")
        }
    }

    return (
        <div id="cartProducts" >
            {cart.map((item) =>
        <ListCartItem lower={lower}  key={item.id}
                  {...item} />
        )}     
            <h1>Total: ${total}</h1>
            <div id="buttonContainer">
                <button onClick={empty} >Empty Cart</button>
                <button onClick={() => navigate("../components/Products")} > Continue Shopping</button>
            </div>
            <button id="completeOrder" onClick={completeOrder} >Complete Order</button>
        </div>
        
    )
}

export default ShoppingCart