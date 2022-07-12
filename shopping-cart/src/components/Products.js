import React from "react";
import ListProductItem from "../components/ListProductItem"
import "../styles/listproductitems.css"

const Products = ({items,addcartItem}) => {

    return (
      <div id="products">
        {items.map((item) =>
        <ListProductItem add={addcartItem} key={item.id}
                  {...item} />
        )}     
      </div>
    );
  };
  
  export default Products;