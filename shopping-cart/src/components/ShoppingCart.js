import React from "react";
import ListCartItem from "./ListCartItem";


function ShoppingCart({total,cart}){
    
    return (
        <div id="cartProducts" >
            {cart.map((item) =>
        <ListCartItem key={item.id}
                  {...item} />
        )}     
            <h1>Total: ${total}</h1>
        </div>
        
    )
}

export default ShoppingCart