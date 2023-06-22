import React, { useEffect } from "react";
import "../styles/listproductitems.css"

const Success = ({emptyCart}) => {

    useEffect(() => {
        emptyCart();
    },[emptyCart]);

    return (
      <div id="success" >
       <h1>Success!</h1>
      </div>
    );
  };
  export default Success;