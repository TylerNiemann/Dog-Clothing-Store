import React from "react";
import "../styles/listproductitems.css"

const ListCartItem = ({lower, remove ,...item}) => {

  const removeFrom = () => {
    lower(item)
}
const deleteFrom = () => {
  remove(item)
}

    return (
        <div className="product">
            <img src={require('../components/images/Dog_leather_jacket.png')} alt="product"></img>
            <div className="productInfo">
              <h1>{item.itemName}</h1>
              <h3>Quantity: {item.qty}</h3>  
              <h3>${item.price}</h3>
              <div className="cartButtons" >
              <button onClick={deleteFrom} className="removeButton" >Remove From Cart</button>
              <button onClick={removeFrom} className="removeButton" >Lower Quantity</button>
              </div>
            </div>
        </div>
    )
  };
  
  export default ListCartItem;