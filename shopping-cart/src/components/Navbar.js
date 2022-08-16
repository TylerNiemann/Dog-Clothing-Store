import React from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../styles/navbar.css"

function Navbar({cart}){

    const element = <FontAwesomeIcon icon={faCartShopping}/>

    return (
        <div id="navbar">
            <Link className="link" to="/components/Home">Home</Link>
            <Link className="link" to="/components/Products">Products</Link>
            <Link className="link" to="/components/ShoppingCart">{element} {cart}</Link>
            <SignIn/>
        </div>
    )
}

export default Navbar;