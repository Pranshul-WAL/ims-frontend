

const initialState={
    dropdownOpen:false,
    products:[],

}

const multiple=(state=initialState,action)=>{
    switch(action.type){
        case 'CREATE_MULT_ORDERS':{
            return{
                ...state,
                dropdownOpen:true
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
                ...state.products,
                products:[{
                    Quantity:0
                }]
            }
        }
        default: return state
    }
       
}

export default multiple;