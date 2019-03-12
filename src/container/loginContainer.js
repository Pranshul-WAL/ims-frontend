import Login from '../components/login';
import { connect } from 'react-redux';
import { login } from '../api/login'

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
        loginUser: (username, password) => {
            (async () => {
                dispatch({ type: 'SET_LOADING', payload: true })

                let loginResponse = await login(username, password);
                if (loginResponse.data.token !== null && loginResponse.data.token !== undefined) {
                    localStorage.setItem('token', loginResponse.data.token)
                    localStorage.setItem('role', loginResponse.data.user.role)
                    localStorage.setItem('isLogin','true')
                } else {
                    alert('Enter valid credentials');
                }
                //dispatch({type:'IS_LOGIN'})
                dispatch({ type: 'CLEAR_FORM' })

                dispatch({ type: 'SET_LOADING', payload: false })
            })()
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

