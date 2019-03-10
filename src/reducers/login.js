const initialState={
    username:'',
    password:''
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
        default:{
            return state
        }

}
}

export default login