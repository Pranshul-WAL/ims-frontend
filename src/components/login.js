import React, {Component} from 'react';
import {
    Button,
    // Collapse,
    // NavbarToggler,
    // Nav,
    // NavItem,
    Form,FormGroup,Label,Input} from 'reactstrap';
import AdminPage from './adminPage';
import { BrowserRouter as Router, Route ,Switch,Redirect} from "react-router-dom";

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
            <div align='center'>
            <h1>Login</h1><hr/>
            <Form>
                <FormGroup>
                   
                    <Input  value={this.props.username} onChange={this.handleChangeUsername} type="text" name="username" id="name" placeholder="Enter the Username" />
                </FormGroup>
                <FormGroup>
                    
                    <Input value={this.props.password} onChange={this.handleChangePassword} type="password" name="password" id="Password" placeholder="Enter the password" />
                </FormGroup>
                <Button color="success" onClick={() =>{this.loginHandler(this.props.username, this.props.password)}}>Login</Button> 
                
            </Form>
            {localStorage.getItem('isLogout') ? <Redirect to='/login' /> : null}            
            {localStorage.getItem('isLogin') ? <Redirect to='/admin' /> : null}
            </div>
           
        )
    }
}

export default Login;