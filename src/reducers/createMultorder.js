

const initialState={
    dropdownOpen:false,
    products:[]
}

const CreateMultOrder=(state=initialState,action)=>{
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
        default: return state
    }
       
}

export default CreateMultOrder;