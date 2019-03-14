import React, { Component } from 'react';
import { Button, Input, Label, FormGroup } from 'reactstrap';
import {Redirect} from "react-router-dom";
// import userList from './userList';
// import { Redirect } from "react-router-dom";
class UserUpdate extends Component {
    constructor(props) {
        super(props);

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeRole = this.handleChangeRole.bind(this);
        this.updateUserHandler = this.updateUserHandler.bind(this);
    }

    handleChangeUsername(e) {
        this.props.getUsername(e.target.value);
    }
    handleChangePassword(e) {
        this.props.getPassword(e.target.value);
    }
    handleChangeRole(e) {
        this.props.getRole(e.target.value);
    }
    updateUserHandler() {
        if (this.props.username ==="" || this.props.password ==="" || this.props.role ==="") {
            alert('Enter valid credentials.');
        } else {
        this.props.updateUser(this.props.username, this.props.password, this.props.role, this.props.match.params.userId);
        }
        // return  ( <Redirect to='/list' />);
    }
    // componentWillUnmount() {
    //     console.log()
        
    // }
    render() {
        return (
            <div class="Login-main">
            <div align="center" class="Login-new Login">
                <h1>Update User</h1><hr />
                <div>
                    <label>Username:</label>
                    <Input type="text" value={this.props.username} onChange={this.handleChangeUsername} placeholder="Enter Username"></Input><br />
                </div>
                <div>
                    <label>Password:</label>
                    <Input type="password" value={this.props.password} onChange={this.handleChangePassword} placeholder="Enter password"></Input><br />
                </div>
                <label>Role:</label>
                {/* <Button onClick={()=>
                    { this.props.createUserHandler(username,password,role)}}>Create</Button> */}
                    <FormGroup>

                    <Label check>
                        <Input type="radio" name="radio1" value="Admin" onChange={this.handleChangeRole} />{' '}
                        Admin
                    </Label><br/>
                    <Label check>
                        <Input type="radio" name="radio1" value="Operator" onChange={this.handleChangeRole}/>{' '}
                        Operator
                    </Label><br/>
                    <Label check>
                        <Input type="radio" name="radio1" value="Stockist" onChange={this.handleChangeRole}/>{' '}
                        Stockist
                    </Label><br/>
                    {/* <Button onClick={()=>
                        { this.props.createUserHandler(username,password,role)}}>Create</Button> */}
                    <Button onClick={this.updateUserHandler}>Update</Button>    
                    </FormGroup>
                    {localStorage.getItem('isUserUpdate') ? <Redirect to='/list' /> : null}
                    {localStorage.removeItem('isUserUpdate')}
                
                
            </div>
           
            </div>
        );
    }
}

export default UserUpdate;