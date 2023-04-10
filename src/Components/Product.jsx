import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './Context';

const Product = () => {

    const [search, setSearch] = useState("");

    const { 
        state: { products }, 
        dispatch, 
    } = useContext(CartContext);

    const productDetails = useNavigate();
    const goToProductDetails = () => {
        productDetails('/productdetails');
    }

    return (
        <>
            <div className="product-container">
                <div className="search">
                    <form onSubmit={(e) => e.preventDefault()} >
                        <input 
                            type="text" 
                            placeholder='Search' 
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                </div>

                <div className="products">
                    <div className="product">
                        {
                            products.filter((product) => {
                                if(search === "") {
                                    return product;
                                } else if(product.name.toLowerCase().includes(search.toLowerCase())) {
                                    return product;
                                }
                                return "";
                            }).map((product) => (
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
                                            }}
                                        >
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