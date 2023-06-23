import { useParams } from 'react-router-dom';
import "../styles/listproductitems.css"

const ProductDetail = ({ items, addcartItem }) => {
  const { index } = useParams();
  const product = items[index];

  const addTo = () => {
    addcartItem(product)
}


  return (
    <div className='productDetail' >
        <img src={require('../components/images/placeholder.png')} alt="product"></img>
      <div className='detail' >
            <h2>{product.itemName}</h2>
            <p>Price: {product.price}</p>
            <button onClick={addTo} >Add To Cart</button>
      </div>
      <div className='descripCase' >
            <p className='description' >{product.description}</p>
        </div>
    </div>
   
  );
};

export default ProductDetail;