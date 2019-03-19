import UserUpdate from '../../components/users/userUpdate';
import {connect} from 'react-redux';
import { update } from '../../api/users';
// import { listUser } from '../api/users';
import Swal from 'sweetalert2'

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
                    Swal.fire({
                        position: 'top-end',
                        type: 'success',
                        title: 'User has been Updated',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    localStorage.setItem('isUserUpdate',true)
    
                    
                    dispatch({type: 'SET_LOADING', payload: false})
                } catch(e) {
                    console.log(e)
                }
            })()
        }

    }
}

export default connect(MapStateToProps,MapDispatchToProps)(UserUpdate);