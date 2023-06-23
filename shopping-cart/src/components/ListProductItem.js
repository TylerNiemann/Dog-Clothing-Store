import React from "react";
import "../styles/listproductitems.css"
import { Link } from "react-router-dom";

const ListProductItem = ({add, index ,...item}) => {

    const addTo = () => {
        add(item)
    }

    return (
        <div className="product">
            <img src={require('../components/images/placeholder.png')} alt="product"></img>
            <div className="productInfo">
              <h1>
              <Link to={`/components/Products/${index}`}>{item.itemName}</Link>
                </h1>
              <div className="productPrice">
                <h3>${item.price}</h3>
                <button onClick={addTo} >Add To Cart</button>
              </div>
            </div>
        </div>
    )
  };
  
  export default ListProductItem;