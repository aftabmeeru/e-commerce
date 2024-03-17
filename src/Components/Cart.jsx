import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaPlus } from 'react-icons/fa'; 
import { FaMinus } from 'react-icons/fa'; 
import { FaTrash } from 'react-icons/fa'; 

import '../Styles/Cart.scss';
import { CartContext } from './Context';

const Cart = () => {

    let { 
        state: { cart, total_price, shipping_fee },
        dispatch,
        increment,
        decrement,
    } = useContext(CartContext); 

    const navigate = useNavigate();
    const continueShopping = () => {
        navigate('/product');
    }

    return (
        <>
            <div className="cart-container">
                <div className="cart-head">
                    <p className='item wid-25'>Item</p>    
                    <p className='cart-hide wid-25'>Price</p>    
                    <p className='qty wid-25'>Quantity</p>    
                    <p className='cart-hide wid-25'>Subtotal</p>  
                    <p className='cart-unhide'></p>
                </div>    

                <div className="cart-details-container">
                    {
                        cart.map((prod) => (
                            <div className="cart-details" key={ prod.id }>
                                <div className="img-name wid-25">
                                    <img src={ prod.img } alt={ prod.name } />
                                    <p>{ prod.name }</p>
                                </div>
                                <p className='price cart-hide wid-25'>${ prod.price }</p>
                                <div className="quantity wid-25">
                                    <span onClick={ () => decrement(prod.id) }> <FaMinus /> </span>
                                    <span className='count'> { prod.qty } </span>
                                    <span onClick={ () => increment(prod.id) }> <FaPlus /> </span>
                                </div>
                                <p className='subtotal cart-hide wid-25'> { (prod.price * prod.qty).toFixed(2) } </p>
                                <button className='trash-btn'
                                    onClick={() => {
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: prod,
                                        })
                                    }}
                                > 
                                    <FaTrash /> 
                                </button>
                            </div>
                        ))
                    }
                </div>

                <div className="clear-continue">
                    <button 
                        className="continue-shopping" 
                        onClick={ continueShopping } >
                        Continue Shopping
                    </button>
                    <button 
                        className="clear-shoppingcart" 
                            onClick={() => {
                                dispatch({
                                    type: "CLEAR_CART",
                                })
                            }}
                        >
                        Clear Shopping Cart
                    </button>
                </div>

                <div className="total-container">
                    <div className="full-total">
                        <div className="total">
                            <div className="subtotal">
                                <p>Subtotal:</p>
                                <p> ${ Number(total_price).toFixed(2) } </p>
                            </div>
                            <div className="shipping">
                                <p>Shipping Fee:</p>
                                <p> ${ shipping_fee } </p>
                            </div>
                            <div className="order-total">
                                <h3>Order Total:</h3>
                                <h3> ${ Number(total_price + shipping_fee).toFixed(2) } </h3>
                            </div>
                        </div>
                        <button className="login">LOGIN</button>
                    </div>
                </div>

            </div>   
        </>
    );
}

export default Cart;