const prodReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": 
            let existingProduct = state.cart.find(currElm => currElm.id === action.payload.id);

            if(existingProduct) {
                let updatedProduct = state.cart.map((currProd) => {
                    if(currProd.id === action.payload.id) {
                        let newQty = currProd.qty + action.payload.qty;

                        if(newQty >= action.payload.stock) {
                            newQty = action.payload.stock;
                        }
                        
                        return {
                            ...currProd,
                            qty: newQty
                        }
                    } else return currProd;
                })
                return {
                    ...state,
                    cart: updatedProduct,
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload }],
                }
            }


        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(cart => cart.id !== action.payload.id)
            }

        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            }

        case "SINGLE_PRODUCT": 
            return {
                ...state,
                singleProduct: { ...action.payload }
            }
   
        case "INCREMENT":
            let incrementProduct = state.cart.map((currElm) => {
                if(currElm.id === action.payload) {
                    let incQty = currElm.qty + 1;
                    
                    if(incQty  >= currElm.stock) {
                        incQty = currElm.stock;
                    }
                    
                    return {
                        ...currElm,
                        qty: incQty,
                    }
                } else return currElm;  
            })
            return { ...state, cart: incrementProduct };
                
        case "DECREMENT":
            let decrementProduct = state.cart.map((currElm) => {
                if(currElm.id === action.payload) {
                    let decQty = currElm.qty - 1

                    if(decQty  <= 1) {
                        decQty = 1;
                    }

                    return {
                        ...currElm,
                        qty: decQty,
                    }
                } else return currElm;
            })
            return { ...state, cart: decrementProduct };

            
            case "TOTAL_PRICE":
            let total_price = state.cart.reduce((accum, currPrice) => {
                let { price, qty } = currPrice;
                accum = accum + price * qty;
                return accum;
            }, 0)
            return { ...state, total_price }

        default:
            return state;
    }
}

export default prodReducer;