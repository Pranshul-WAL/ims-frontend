const initialState={
    isLoading:false,
    userDetails:[]
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'SET_LOADING': return{
            ...state,
            isLoading:action.payload,
        }
        case 'SET_USER_DETAILS': return{
            ...state,
            userDetails:action.payload,
        }
        default: return state;
    }
}

export default userReducer;