import React from "react";
import "../styles/listproductitems.css"

const ListProductItem = ({id,itemName,price}) => {
    return (
        <div className="product">
            <h1>{itemName}</h1>
            <h4>${price}</h4>
        </div>
    )
  };
  
  export default ListProductItem;