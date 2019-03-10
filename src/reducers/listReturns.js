const initialState = {
    isLoading: false,
    returns: [],
}

const listOrders = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case 'IsLOADING': return {
            ...state,
            isLoading: action.payload,
        }
        case 'LISTRETURNS': return {
            ...state,
            returns: action.payload,
        }
    }
    
}

export default listOrders;