import UserCreate from '../../components/users/userCreate';
import {connect} from 'react-redux';
import { createNew } from '../../api/users';
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
        createUser:(username, password, role)=>{
            (async() => {
                try{
                    dispatch({type:'SET_LOADING', payload:true})
    
                    await createNew(username, password, role)
                    Swal.fire({
                        position: 'top-end',
                        type: 'success',
                        title: 'User has been added',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    localStorage.setItem('isUserCreate',true)
                    dispatch({ type: 'CLEAR_FORM' })
                    dispatch({type: 'SET_LOADING', payload: false})
                } catch(e) {
                    console.log(e)
                }
            })()
        }

    }
}

export default connect(MapStateToProps,MapDispatchToProps)(UserCreate);