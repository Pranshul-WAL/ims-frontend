const initialState={
    username:'',
    password:'',
    isLoading:false
}


const login=(state=initialState,action)=>{
    switch(action.type){
        case 'USERNAME_VALUE':{
            return{
                ...state,
                username:action.payload
            }  
        }
        case 'PASSWORD_VALUE':{
            return{
                ...state,
                password:action.payload
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
        default:{
            return state
        }

}
}

export default login