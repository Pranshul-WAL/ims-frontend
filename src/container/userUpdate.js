import UserUpdate from '../components/userUpdate';
import {connect} from 'react-redux';
import { update } from '../api/users';
// import { listUser } from '../api/users';

const MapStateToProps=(state)=>{
    return{
        // user:state.user.user,
        username:state.userCreate.username,
        password:state.userCreate.password,
        role:state.userCreate.role,
        isLoading:state.userCreate.isLoading
    }
}

const MapDispatchToProps=(dispatch)=>{
    return{
        getUsername:(value)=>dispatch({type:'GET_NAME',payload:value}),
        getPassword:(value)=>dispatch({type:'GET_PASSWORD', payload:value}),
        getRole:(value)=>dispatch({type:'GET_ROLE', payload:value}),
        updateUser:(username, password, role, userId)=>{
            (async() => {
                try{
                    dispatch({type:'SET_LOADING', payload:true})
    
                    await update(username, password, role, userId)
                    
                    dispatch({type: 'SET_LOADING', payload: false})
                } catch(e) {
                    console.log(e)
                }
            })()
        }

    }
}

export default connect(MapStateToProps,MapDispatchToProps)(UserUpdate);