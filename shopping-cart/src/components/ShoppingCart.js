import React from "react";
import ListCartItem from "./ListCartItem";
import "../styles/listproductitems.css"


function ShoppingCart({lower,total,cart}){
    
    return (
        <div id="cartProducts" >
            {cart.map((item) =>
        <ListCartItem lower={lower}  key={item.id}
                  {...item} />
        )}     
            <h1>Total: ${total}</h1>
            <div id="buttonContainer">
                <button>Empty Cart</button>
                <button> Continue Shopping</button>
            </div>
        </div>
        
    )
}

export default ShoppingCart