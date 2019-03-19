const initialState = {
    isLoading: false,
    items: [],
    returns: [],
}

const Items = (state = initialState, action)  => {
    switch(action.type) {
        case 'SET_LOADING': return {
            ...state,
            isLoading: action.payload,
        };
        case 'LIST_ITEMS': return {
            ...state,
            items: action.payload,
        };
        case 'ADD_TO_RETURNS': return {
            ...state,
            returns: [
                ...state.returns,
                action.payload
            ]
        };
        case 'REMOVE_FROM_RETURNS': return {
            ...state,
            returns: action.payload
        };
        default: return state;
    }
}

export default Items;
