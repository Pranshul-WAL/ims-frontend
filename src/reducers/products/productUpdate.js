const initialState={
    productName:'',
    salePrice:'', 
    productDescription:'',
    quantity:0,
    isLoading:false
}

const productUpdate=(state=initialState,action)=>{
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
        case 'GET_UPDATE_QUANTITY':{
            return{
                ...state,
                quantity:action.payload
            }
        }
        case 'SET_LOADING':{
            return{
                ...state,
                isLoading:action.payload
            }
        }
        
        default: return state   
    }
}

export default productUpdate;