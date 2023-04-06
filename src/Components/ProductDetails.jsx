import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './Context';

import { FaPlus } from 'react-icons/fa'; 
import { FaMinus } from 'react-icons/fa';

import '../Styles/ProductDetails.scss';

const ProductDetails = () => {

    const { state: { singleProduct } } = useContext(CartContext);

    console.log(singleProduct);
    
    const navigate = useNavigate();
    const backToProductsBtn = () => {
        navigate('/product');
    }
    
    // const [count, setCount] = useState(1);
    // function increment() {
    //     if(count < 3) {
    //         setCount(count + 1);
    //     }
    //     return count;
    // }
    // function decrement() {
    //     if(count > 1) setCount(count - 1);
    //     return count;
    // }

  return (
    <>
            <div className='product-container'>
            <div className="back-to-products">
                <button onClick={ backToProductsBtn }>Back To Products</button>
            </div>
            <div className="product">
                <div className="product-img">
                    <img src = { singleProduct.img } alt= { singleProduct.name } />
                </div>
                <div className="product-details">
                    <h2 className='name'> { singleProduct.name } </h2>
                    <p className='price'> ${ singleProduct.price } </p>
                    <p className='desc'>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge</p>
                    <div className="available">
                        <h3>Available :</h3>
                        <p>In Stock</p>
                    </div>
                    <div className="available">
                        <h3>SKU :</h3>
                        <p>RecQ0fMd8T0Vk211E</p>
                    </div>
                    <div className="available border-bottom">
                        <h3>Brand :</h3>
                        <p>Liddy</p>
                    </div>
                    <div className="count">
                        <p> <FaMinus /> </p>
                        <p className='count-nbr'> 1 </p>
                        <p> <FaPlus /> </p>
                    </div>
                    <button className="add-to-cart">ADD TO CART</button>
                </div>
            </div>
        </div>   
        <div className="products">
            <button onClick={ backToProductsBtn }>Products</button>
        </div>

    </>
  );
}

export default ProductDetails;