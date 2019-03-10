const initialState = {
    isLoading: false,
    returns: [],
}

const listReturns = (state = initialState, action) => {
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
        default: return state;
    }
    
}

export default listReturns;