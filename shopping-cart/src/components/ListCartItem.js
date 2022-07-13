import React from "react";
import "../styles/listproductitems.css"

const ListCartItem = ({...item}) => {

    return (
        <div className="product">
            <img src={require('../components/images/placeholder.png')} alt="product"></img>
            <div className="productInfo">
              <h1>{item.itemName}</h1>
              <h3>Quantity: {item.qty}</h3>  
              <div className="productPrice">
                <h3>${item.price}</h3>
              </div>
            </div>
        </div>
    )
  };
  
  export default ListCartItem;