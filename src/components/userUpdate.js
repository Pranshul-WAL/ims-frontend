import React, { Component } from 'react';
import { Button, Input, Label, FormGroup } from 'reactstrap';
import { Redirect } from "react-router-dom";
// import userList from './userList';
// import { Redirect } from "react-router-dom";
import AdminPage from '../adminPage';
import Swal from 'sweetalert2';
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
        if (this.props.username === "" || this.props.password === "" || this.props.role === "") {
            Swal.fire({
                position: 'center',
                type: 'error',
                title: 'Please Enter the Credentials    ',
                showConfirmButton: false,
                timer: 1500,

            })
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
            <AdminPage>
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
                    </Label>&emsp;&emsp;
                            <Label check>
                                <Input type="radio" name="radio1" value="Operator" onChange={this.handleChangeRole} />{' '}
                                Operator
                    </Label>&emsp;&emsp;
                            <Label check>
                                <Input type="radio" name="radio1" value="Stockist" onChange={this.handleChangeRole} />{' '}
                                Stockist
                    </Label>
                            {/* <Button onClick={()=>
                        { this.props.createUserHandler(username,password,role)}}>Create</Button> */}
                        <br></br>
                            <Button onClick={this.updateUserHandler}>Update</Button>
                        </FormGroup>
                        {localStorage.getItem('isUserUpdate') ? <Redirect to='/list' /> : null}
                        {localStorage.removeItem('isUserUpdate')}


                    </div>

                </div>
            </AdminPage>
        );
    }
}

export default UserUpdate;