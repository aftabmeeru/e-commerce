import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaPlus } from 'react-icons/fa'; 
import { FaMinus } from 'react-icons/fa'; 
import { FaTrash } from 'react-icons/fa'; 

import '../Styles/Cart.scss';
import { CartContext } from './Context';

const Cart = () => {

    let { 
        state: { cart },
        dispatch,
        amount,
        prodId
    } = useContext(CartContext); 

    const [qty, setQty] = useState(1);

    const navigate = useNavigate();
    const continueShopping = () => {
        navigate('/product');
    }

    let [id] = cart.map(curr => curr.id);

    
    console.log(id);
    console.log(prodId);

    const increment = () => {
        qty < amount ? setQty(qty + 1) : setQty(amount);
    }
    
    const decrement = () => {
        qty > 1 ? setQty(qty - 1) : setQty(1);
    }    

    return (
        <>
            <div className="cart-container">
                <div className="cart-head">
                    <p>Item</p>    
                    <p>Price</p>    
                    <p>Quantity</p>    
                    <p>Subtotal</p>    
                </div>    

                <div className="cart-details-container">
                    {
                        cart.map((prod) => (
                            <div className="cart-details" key={ prod.id }>
                                <div className="img-name">
                                    <img src={ prod.img } alt={ prod.name } />
                                    <p>{ prod.name }</p>
                                </div>
                                <p className='price'>${ prod.price }</p>
                                <div className="quantity">
                                    <span onClick={ decrement }> <FaMinus /> </span>
                                    <span className='count'> { qty } </span>
                                    <span onClick={ increment }> <FaPlus /> </span>
                                </div>
                                <p className='subtotal'>  </p>
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
                                <p>Subtotal :</p>
                                <p>$230.00</p>
                            </div>
                            <div className="shipping">
                                <p>Shipping Fee :</p>
                                <p>$230.00</p>
                            </div>
                            <div className="order-total">
                                <h3>Order Total :</h3>
                                <h3>$290.00</h3>
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