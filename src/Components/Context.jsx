import React, { createContext, useReducer } from 'react';
import { productList } from '../Components/ProductList';
import reducer from '../Components/prodReducer';

import '../Styles/Products.scss';

export const CartContext = createContext();

const initialState = {
    products: productList,
    cart: [],
    singleProduct: [],
}

const Context = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = (id) => {
        dispatch({ type: "INCREMENT", payload: id })
    }
    const decrement = (id) => {
        dispatch({ type: "DECREMENT", payload: id })
    }

    return (
        <CartContext.Provider value = { { state, dispatch, increment, decrement } } >
            { children }
        </CartContext.Provider>
    );
}

export default Context;