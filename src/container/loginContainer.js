import Login from '../components/login';
import { connect } from 'react-redux';
import { login } from '../api/login'
import {withRouter} from "react-router-dom";
import Swal from 'sweetalert2';

const mapStateToProps = state => {
    return {
        username: state.login.username,
        password: state.login.password,
        isLogin:state.login.isLogin
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getUsername: (value) => dispatch({ type: 'USERNAME_VALUE', payload: value }),
        getPassword: (value) => dispatch({ type: 'PASSWORD_VALUE', payload: value }),
        loginUser: (username, password,props) => {
            (async () => {
                dispatch({ type: 'SET_LOADING', payload: true })

                let loginResponse = await login(username, password);
                if (loginResponse.data.token !== null && loginResponse.data.token !== undefined) {
                    localStorage.setItem('token', loginResponse.data.token)
                    localStorage.setItem('role', loginResponse.data.user.role)
                    localStorage.setItem('userId',loginResponse.data.user.id)
                    localStorage.setItem('isLogin',true)
                    // if (localStorage.getItem("isLogin") && localStorage.getItem("role") === 3) {
                
                    //     console.log(props)
                    //     props.history.push("/stockist")
                    // }
                } else {
                    Swal.fire({
                        position: 'center',
                        type: 'error',
                        title: 'Please Enter Valid Credentials',
                        showConfirmButton: false,
                        timer: 1500,
        
                      })
                }
                //dispatch({type:'IS_LOGIN'})
                dispatch({ type: 'CLEAR_FORM' })

                dispatch({ type: 'SET_LOADING', payload: false })
            })()
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

