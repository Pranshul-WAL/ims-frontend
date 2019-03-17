const initialState = {
    isLoading: false,
    orders: [],
}

const Orders = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_LOADING': return {
            ...state,
            isLoading: action.payload,
        }
        case 'LIST_ORDERS': return {
            ...state,
            orders: action.payload,
        }
        default: return state;
    }
}

export default Orders,