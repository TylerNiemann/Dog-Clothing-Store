import React from "react";
import ListProductItem from "../components/ListProductItem"

const Products = ({items}) => {

    return (
      <div>
        {items.map((item) =>
        <ListProductItem key={item.id}
                  {...item} />
        )}      
      </div>
    );
  };
  
  export default Products;