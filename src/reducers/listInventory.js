const initialState = {
    isLoading: false,
    inventory: []
};

const listInventory = (state = initialState, action) => {
    switch(action.type) {
        case 'ISLOADING': return {
            ...state,
            isLoading: action.payload,
        };
        case 'LISTINVENTORY': return {
            ...state,
            inventory: action.payload,
        }
        default: return state;
    }
}

export default listInventory;

