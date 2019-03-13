import UserList from '../components/userList';
import {connect} from 'react-redux';
import { listUser } from '../api/users';
import {deleteUser} from '../api/users'

const MapStateToProps=(state)=>{
    //console.log(state);
    return{
        userDetails: state.userList.userDetails,
        isLoading:state.userList.isLoading
    }
}

const MapDispatchToProps=(dispatch)=>{
    return{
        fetchUsers:() => {
            (async() => {
                dispatch({type:'SET_LOADING', payload: true})

                let response = await listUser()

                dispatch({type: 'SET_USER_DETAILS', payload: response.data.users})

                dispatch({type: 'SET_LOADING', payload: false})
            })()

        },
        deleteUser:(userId)=>{
            (async() => {
                dispatch({type:'SET_LOADING', payload: true})

                await deleteUser(userId)
                dispatch({type:'DELETE_USER', payload:userId})

                dispatch({type:'SET_LOADING', payload: false})
            })()
        }

    }
}

export default connect(MapStateToProps,MapDispatchToProps)(UserList);