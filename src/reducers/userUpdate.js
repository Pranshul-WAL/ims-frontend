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
        // case 'CREATE_USER':{
        //     return{
        //         ...state,
        //         user:[
        //             ...state.user,
        //             {
        //                 username:state.username,
        //                 password:state.password,
        //                 role:state.role
        //             }
        //         ],
        //         username:'',
        //         password:'',
        //         role:''

        //     }
        //} 
        default: return state   
    }
}

export default userUpdate;