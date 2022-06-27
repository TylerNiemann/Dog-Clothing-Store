import React from "react";

const ListProductItem = ({id,itemName,price}) => {
    return (
        <div>
            <h1>{itemName}</h1>
            <p>{price}</p>
        </div>
    )
  };
  
  export default ListProductItem;