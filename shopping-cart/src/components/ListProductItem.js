import React from "react";
import "../styles/listproductitems.css"
import { Link } from "react-router-dom";
import { useState } from "react";

const ListProductItem = ({add, index, ...item}) => {
    const [quantity, setQuantity] = useState(1);

    const addTo = () => {
      console.log(quantity)
      add(item, quantity);
    }

    const handleQuantityChange = (event) => {
      const newQuantity = parseInt(event.target.value);
      setQuantity(newQuantity);
    };

    return (
        <div className="product">
            <img src={require(`../components/images/Dog_leather_jacket.png`)} alt="product"></img>
            <div className="productInfo">
              <h1>
              <Link to={`/components/Products/${index}`}>{item.itemName}</Link>
                </h1>
              <div className="productPrice">
                <h3>${item.price}</h3>
                <div className="addQuantity" >
                  <label htmlFor="quantityInput">Quantity: </label>
                  <input
                    type="number"
                    id="quantityInput"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                  />
                  <button onClick={addTo} >Add To Cart</button>
                </div>   
              </div>
            </div>
        </div>
    )
  };
  
  export default ListProductItem;