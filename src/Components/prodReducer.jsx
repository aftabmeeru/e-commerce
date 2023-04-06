const prodReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": 
            return {
                ...state,
                cart: [...state.cart, { ...action.payload }],
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
            return {
                ...state,
                qty: action.payload.id ? action.payload.qty + 1 : action.payload.qty
            }
            
        case "DECREMENT":
            return {
                ...state,
                qty: action.payload - 1
            }
    
        default:
            return state;
    }
}

export default prodReducer;