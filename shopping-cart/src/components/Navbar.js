import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"

function Navbar(){
    return (
        <div id="navbar">
            <Link className="link" to="/components/Home">Home</Link>
            <Link className="link" to="/components/Products">Products</Link>
            <h1>Cart</h1>
        </div>
    )
}

export default Navbar