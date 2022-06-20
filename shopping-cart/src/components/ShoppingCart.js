import React, { useState } from "react";


function ShoppingCart(){
    const [total,setTotal] = useState(0);
    const [cart, setCart] = useState({
       items : [
        {
        quantity : 2,
        price : 50 
        },
        {
         quantity : 1,
         price : 50
        }
    ]
});

    const calculateTotal = (cart) => {  
      return cart.items.reduce((prev, curr) => prev + (curr.quantity * curr.price),  0)
    }

    const newTotal = () => {
       setTotal(calculateTotal(cart))
    }
    
    return (
        <div>
            <button onClick={newTotal}>Calc</button>
            <h1>{total}</h1>
        </div>
        
    )
}

export default ShoppingCart