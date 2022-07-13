import React from "react";
import "../styles/listproductitems.css"

const ListCartItem = ({lower,...item}) => {

  const removeFrom = () => {
    lower(item)
}

    return (
        <div className="product">
            <img src={require('../components/images/placeholder.png')} alt="product"></img>
            <div className="productInfo">
              <h1>{item.itemName}</h1>
              <h3>Quantity: {item.qty}</h3>  
              <h3>${item.price}</h3>
              <button onClick={removeFrom} className="removeButton" >Remove From Cart</button>
            </div>
        </div>
    )
  };
  
  export default ListCartItem;