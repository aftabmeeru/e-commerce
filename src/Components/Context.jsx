import React, { createContext, useEffect, useReducer } from 'react';
import { productList } from '../Components/ProductList';
import reducer from '../Components/prodReducer';

import '../Styles/Products.scss';

export const CartContext = createContext();

const initialState = {
    products: productList,
    cart: [],
    singleProduct: [],
    total_price: "",
    shipping_fee: 10.00,
}

const Context = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = (id) => {
        dispatch({ type: "INCREMENT", payload: id })
    }
    const decrement = (id) => {
        dispatch({ type: "DECREMENT", payload: id })
    }

    useEffect(() => {
        dispatch({ type: "TOTAL_PRICE" });
    }, [state.cart]);

    return (
        <CartContext.Provider value = { { state, dispatch, increment, decrement } } >
            { children }
        </CartContext.Provider>
    );
}

export default Context;