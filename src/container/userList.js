import UserList from '../components/userList';
import {connect} from 'react-redux';
import { listUser } from '../api/users';

const MapStateToProps=(state)=>{
    //console.log(state);
    return{
        userDetails: state.userReducer.userDetails,
        isLoading:state.userReducer.isLoading
    }
}

const MapDispatchToProps=(dispatch)=>{
    return{
        fetchUsers:() => {
            (async() => {
                dispatch({type:'SET_LOADING', payload: true})

                let response = await listUser()

                dispatch({type: 'SET_USER_DETAILS', payload: response.data})

                dispatch({type: 'SET_LOADING', payload: false})
            })()
        }
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(UserList);