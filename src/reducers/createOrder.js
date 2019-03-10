const initialState={
    productName:'', 
    productId:'',
    Quantity:''
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
                productId:action.payload
            }
        }
        case 'GET_QUANTITY':{
            return{
                ...state,
                Quantity:action.payload
            }
        }
        
        default: return state   
    }
}

export default order;