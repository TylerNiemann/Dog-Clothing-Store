import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"

function Navbar({cart}){

    return (
        <div id="navbar">
            <Link className="link" to="/components/Home">Home</Link>
            <Link className="link" to="/components/Products">Products</Link>
            <Link className="link" to="/components/ShoppingCart">Cart {cart}</Link>
        </div>
    )
}

export default Navbar