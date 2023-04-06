import React, { createContext, useReducer, useState } from 'react';
import { productList } from '../Components/ProductList';
import reducer from '../Components/prodReducer';

import '../Styles/Products.scss';

export const CartContext = createContext();

const initialState = {
    products: productList,
    cart: [],
    singleProduct: [],
    qty: 1,
    min: 0,
    max: 3
}

const Context = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const [amount, setAmount] = useState();
    const [prodId, setProdId] = useState();

    return (
        <CartContext.Provider value = { { state, dispatch, amount, setAmount, prodId, setProdId } } >
            { children }
        </CartContext.Provider>
    );
}

export default Context;