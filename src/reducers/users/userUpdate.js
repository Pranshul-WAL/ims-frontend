const initialState={
    username:'',
    password:'',
    role:'',
    isLoading:false
}

const userUpdate=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_NAME':{
            return{
                ...state,
                username:action.payload
            }
        }
        case 'GET_PASSWORD':{
            return{
                ...state,
                password:action.payload
            }
        }
        case 'GET_ROLE':{
            return{
                ...state,
                role:action.payload
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

export default userUpdate;