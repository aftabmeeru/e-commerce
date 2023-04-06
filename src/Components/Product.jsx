import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './Context';

const Product = () => {

    const { 
        state: { products }, 
        dispatch, 
        setAmount,
        setProdId,
    } = useContext(CartContext);

    const productDetails = useNavigate();
    const goToProductDetails = () => {
        productDetails('/productdetails');
    }

    return (
        <>
            <div className="product-container">
                <div className="search">
                    <input type="text" placeholder='Search' />
                </div>

                <div className="products">
                    <div className="product">
                        {
                            products.map((product) => (
                                <div className="product" key={product.id} >
                                    <div className="product-img">
                                        <img
                                            src={product.img} 
                                            alt="img" 
                                            onClick = { () => {
                                                goToProductDetails();
                                                dispatch({
                                                    type: "SINGLE_PRODUCT",
                                                    payload: product,
                                                })
                                            } }
                                        />
                                    </div>
                                    <div className="name-price">
                                        <h5>{product.name}</h5>
                                        <p>${product.price}</p>
                                    </div>
                                    <div className="add-to-cart">
                                        <button 
                                            onClick={ () => {
                                                dispatch({
                                                    type: "ADD_TO_CART",
                                                    payload: product,
                                                })
                                                setAmount(product.stock)
                                                setProdId(product.id)
                                            }}>
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;