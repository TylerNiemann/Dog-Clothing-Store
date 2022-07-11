import React from "react";
import ListProductItem from "../components/ListProductItem"
import "../styles/listproductitems.css"

const Products = ({items}) => {

    return (
      <div id="products">
        {items.map((item) =>
        <ListProductItem key={item.id}
                  {...item} />
        )}      
      </div>
    );
  };
  
  export default Products;