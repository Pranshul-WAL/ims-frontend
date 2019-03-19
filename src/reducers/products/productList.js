const initialState={
    isLoading:false,
    productDetails:[]
}

const productReducer= (state=initialState,action)=>{
    switch(action.type){
        case 'SET_LOADING':return{
            ...state,
            isLoading:action.payload
        }
        case 'SET_PRODUCT_DETAILS':return{
            ...state,
            productDetails:action.payload
        }
        default:
        return state
    }
}

export default productReducer;