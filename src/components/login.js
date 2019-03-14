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
import {Redirect} from "react-router-dom";

class Login extends Component{
    constructor(props){
        super(props);

        this.handleChangeUsername=this.handleChangeUsername.bind(this);
        this.handleChangePassword=this.handleChangePassword.bind(this);
        this.loginHandler=this.loginHandler.bind(this)
    }
    handleChangeUsername(e){
        this.props.getUsername(e.target.value)
    }
    handleChangePassword(e){
        this.props.getPassword(e.target.value)
    }
    loginHandler(username, password) {
        this.props.loginUser(username, password);    
    }
    logoutHandler(){
        localStorage.setItem('isLogout',true);
        //localStorage.clear();
        
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
                            <Button color="success" onClick={() =>{this.loginHandler(this.props.username, this.props.password)}}>Login</Button> 
                            
                        </Form>
                        {localStorage.getItem('isLogout') ? <Redirect to='/login' /> : null}            
                        {localStorage.getItem('isLogin') ? <Redirect to='/admin' /> : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;