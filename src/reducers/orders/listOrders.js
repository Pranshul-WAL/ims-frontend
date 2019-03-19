const initialState = {
    isLoading: false,
    orders: []
};

const listOrders = (state = initialState, action) => {
    switch(action.type) {
        case 'ISLOADING': return {
            ...state,
            isLoading: action.payload,
        }
        case 'LISTORDERS': return { 
            ...state,
            orders: action.payload,
        }
        default: return state;
    }
}

export default listOrders;