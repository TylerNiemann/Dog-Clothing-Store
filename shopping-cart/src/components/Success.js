import React, { useEffect } from "react";
import "../styles/listproductitems.css"

const Success = ({emptyCart}) => {

    useEffect(() => {
        emptyCart();
    },[emptyCart]);

    return (
      <div id="success" >
       <h1>Success!</h1>
       <p>Your payment has been successfully processed.</p>
       <p>Thank you for your purchase!</p>
      </div>
    );
  };
  export default Success;