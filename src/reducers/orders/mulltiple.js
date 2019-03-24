

const initialState={
    dropdownOpen:false,
    inputQuantity:'',
    products:[],
    activeOrder:{},
    newProduct:[]

}

const multiple=(state=initialState,action)=>{
    switch(action.type){
        case 'NEW_PRODUCT':{
            return{
                ...state,
                newProduct:[
                    ...state.newProduct,
                    {   
                    productId:state.activeOrder.order.productId,
                    productName:state.activeOrder.order.productName,
                    Quantity:state.activeOrder.Quantity,
                    salePrice:state.activeOrder.order.salePrice,
                }]
            }
        }
        case 'CREATE_ACTIVE':{
            return{
                ...state,
                activeOrder:{
                    ...state.activeOrder,
                    order: action.payload
                }
            }
        }
        case 'CREATE_MULT_ORDERS':{
            return{
                ...state,
                dropdownOpen:true
            }
        }
        case 'HANDLE_QUANTITY':{
            return{
                ...state,
               activeOrder:{
                   ...state.activeOrder,
                   Quantity: action.payload
               }
            }
        }
        case 'GET_MULTI_ORDER_QUANTITY':{
            return{
                ...state,
                products:action.payload
                
            }
    }
        case 'RESET_QUANTITY':{
            return {
                ...initialState
            }
        }

        case 'RESET_ACTIVE': {
            return {
                ...state,
                activeOrder: initialState.activeOrder,
            }
        }
        default: return state
    }
       
}

export default multiple;