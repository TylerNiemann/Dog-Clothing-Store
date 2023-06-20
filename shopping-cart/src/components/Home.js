import React from "react";
import "../styles/listproductitems.css"

const Home = () => {
    return (
      <div id="home" >
       <h1>Mock E-Commerce Store</h1>
       <img src={require('./images/Dog.jpg')} alt="product"></img>
      </div>
    );
  };
  export default Home;