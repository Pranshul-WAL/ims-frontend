import Login from '../components/login';
import {connect} from 'react-redux';

const mapStateToProps=state=>{
    return{
        username:state.login.username,
        password:state.login.password
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        getUsername:(value)=>dispatch({type:'USERNAME_VALUE', payload:value}),
        getPassword:(value)=>dispatch({type:'PASSWORD_VALUE', payload:value})

    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);

