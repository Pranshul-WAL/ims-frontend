import React, {Component} from 'react';
import {
    Button,
    // Collapse,
    // NavbarToggler,
    // Nav,
    // NavItem,
    Form,FormGroup,Label,Input} from 'reactstrap';

class Login extends Component{
    constructor(props){
        super(props);

        this.handleChangeUsername=this.handleChangeUsername.bind(this);
        this.handleChangePassword=this.handleChangePassword.bind(this);
    }
    handleChangeUsername(e){
        this.props.getUsername(e.target.value)
    }
    handleChangePassword(e){
        this.props.getPassword(e.target.value)
    }
    render(){
        return(
            <Form>
                <FormGroup>
                    <Label for="name">Username:</Label>
                    <Input  value={this.props.username} onChange={this.handleChangeUsername} type="text" name="username" id="name" placeholder="Enter the Username" />
                </FormGroup>
                <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input value={this.props.password} onChange={this.handleChangePassword} type="password" name="password" id="Password" placeholder="insert password" />
                </FormGroup>
                <Button color="success" onClick={Login}>Login</Button> 
                {/* <div align="center">
                   <span>Username:</span>
                   <input value="text" onChange={this.handleChangeUsername}></input><br/>
                   <span>Password:</span>
                   <input value="text" onChange={this.handleChangePassword}></input><br/>
                   <Button color="success" onClick={Login}>Login</Button> 
                </div> */}
            </Form>    
        )
    }
}

export default Login;