import React, {Component} from 'react';
import {
    Button,
    // Collapse,
    // NavbarToggler,
    // Nav,
    // NavItem,
    Label,
    Form,FormGroup, Input} from 'reactstrap';
// import AdminPage from './adminPage';
import {Redirect, withRouter} from "react-router-dom";
import Swal from 'sweetalert2';

class Login extends Component{
    constructor(props){
        super(props);

        this.handleChangeUsername=this.handleChangeUsername.bind(this);
        this.handleChangePassword=this.handleChangePassword.bind(this);
        this.loginHandler=this.loginHandler.bind(this);
    }
    handleChangeUsername(e){
        this.props.getUsername(e.target.value)
    }
    handleChangePassword(e){
        this.props.getPassword(e.target.value)
    }
    loginHandler(username, password,props) {
        if(username===""||password===""){
            Swal.fire({
                position: 'center',
                type: 'error',
                title: 'Please Enter the Credentials',
                showConfirmButton: false,
                timer: 1500,

              })
        } else {
            this.props.loginUser(username, password,props);
            
            // console.log(localStorage.getItem("isLogin"), localStorage.getItem("role"))
            
        }

    
    }
    logoutHandler(){
        localStorage.setItem('isLogout',true);
        localStorage.clear();
        
    }
    render(){
        return(
            <div className="container my-0 mx-auto">
                <div className="Login-main">
                    <div className="Login Login-new">
                        <h1>Login</h1>
                        <Form className="">
                            <Label>Username:</Label>
                            <FormGroup>
                                <Input  value={this.props.username} onChange={this.handleChangeUsername} type="text" name="username" id="name" placeholder="Enter the Username" />
                            </FormGroup>
                            <Label>Password:</Label>
                            <FormGroup>
                                <Input value={this.props.password} onChange={this.handleChangePassword} type="password" name="password" id="Password" placeholder="Enter the password" />
                            </FormGroup>
                            <Button color="success" onClick={() =>{this.loginHandler(this.props.username, this.props.password,this.props)}}>Login</Button> 
                            
                        </Form>
                        {localStorage.getItem('isLogout') ? <Redirect to='/login' /> : null}            
                        {localStorage.getItem('isLogin')  ? <Redirect to='/admin'/>:null }
                        {/* {localStorage.getItem('role')===3?<Redirect to='/list'/>:null} */}
                    </div>
                </div>
            </div>
           
        )
    }
    
}

export default withRouter(Login);