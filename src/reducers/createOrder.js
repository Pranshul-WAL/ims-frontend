const initialState={
    productName:'', 
    productId:'',
    Quantity:'',
    isLoading:false
}

const order=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_PRODUCT_NAME':{
            return{
                ...state,
                productName:action.payload
            }
        }
        case 'GET_PRODUCT_ID':{
            return{
                ...state,
                productId:action.payloadorder
            }
        }
        case 'GET_QUANTITY':{
            return{
                ...state,
                Quantity:action.payload
            }
        }
        case 'SET_LOADING':{
            return{
                ...state,
                isLoading:action.payload
            }
        }
        case 'CLEAR_FORM':{
            return initialState
        }
        
        default: return state   
    }
}

export default order;