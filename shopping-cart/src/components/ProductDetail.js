import { useParams } from 'react-router-dom';
import "../styles/listproductitems.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ProductDetail = ({ items, addcartItem }) => {
  const { index } = useParams();
  const product = items[index];
  const [quantity, setQuantity] = useState(1);

  const addTo = () => {
    addcartItem(product, quantity)
}

const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

const navigate = useNavigate();


  return (
    <div className='detailContainer'>
        <div className='productDetail' >
            <img src={require('../components/images/Dog.jpg')} alt="product"></img>
        <div className='detail' >
                <button className='detailButton'  onClick={() => navigate("../components/Products")}>
                Back to Product List
                </button>
                <h2>{product.itemName}</h2>
                <p className='detailPrice' >Price: {product.price}</p>
                <p className='description' >{product.description}</p>
                <div>
                  <label htmlFor="quantityInput">Quantity: </label>
                  <input
                    type="number"
                    id="quantityInput"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                  />
                </div>
                <button onClick={addTo} >Add To Cart</button>
        </div>
        </div>
    </div>
  );
};

export default ProductDetail;