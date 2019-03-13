const initialState={
    productName:'',
    salePrice:'', 
    productDescription:'',
    Quantity:'',
    isLoading:false
}

const product=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_PRODUCT_NAME':{
            return{
                ...state,
                productName:action.payload
            }
        }
        case 'GET_SALE_PRICE':{
            return{
                ...state,
                salePrice:action.payload
            }
        }
        case 'GET_DESCRIPTION':{
            return{
                ...state,
                productDescription:action.payload
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

export default product;