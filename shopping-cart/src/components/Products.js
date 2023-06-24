import React from "react";
import ListProductItem from "../components/ListProductItem"
import "../styles/listproductitems.css"
import { useState } from 'react';

const Products = ({ items, addcartItem }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    
    <div id="products">
      {currentItems.map((item, index) => (
        <ListProductItem
          add={addcartItem}
          key={item.id}
          index={index  + indexOfFirstItem}
          {...item}
        />
      ))}
      
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handleClick(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

  
  export default Products;