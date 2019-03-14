import React,{Component, } from 'react';
import {Button,Input,Label,FormGroup} from 'reactstrap';
import {Redirect} from "react-router-dom";
import AdminPage from './adminPage';
class UserCreate extends Component {
    constructor(props){
        super(props);

        this.handleChangeUsername=this.handleChangeUsername.bind(this);
        this.handleChangePassword=this.handleChangePassword.bind(this);
        this.handleChangeRole=this.handleChangeRole.bind(this);
        this.createUserHandler=this.createUserHandler.bind(this);
    }

    handleChangeUsername(e){
        this.props.getUsername(e.target.value);
    }
    handleChangePassword(e){
        this.props.getPassword(e.target.value);
    }
    handleChangeRole(e){
        this.props.getRole(e.target.value);
    }
    createUserHandler(){
        this.props.createUser(this.props.username, this.props.password, this.props.role)
    }
    render() {
        return (
            <AdminPage>
            <div className="Login-main">
            <div className="Login-new">
                <h1>Create New User</h1><hr/>
                <div>
                    <Label>Username:</Label>
                    <Input type="text"  value={this.props.username} onChange={this.handleChangeUsername} placeholder="Enter Username"></Input><br/>
                </div>
                <div>
                    <Label>Password:</Label>
                    <Input type="password"  value={this.props.password} onChange={this.handleChangePassword} placeholder="Enter password"></Input><br/>
                </div>
                <Label>Role:</Label><br/>
                {/* <Input type="text"  value={this.props.role} onChange={this.handleChangeRole} placeholder="Enter role"></Input><br/> */}
                <FormGroup>
                <Label check>
                    <Input type="radio" name="radio1" value="Admin" onChange={this.handleChangeRole} />{' '}
                    Admin
                </Label>&emsp;
                &emsp;
                <Label check>
                    <Input type="radio" name="radio1" value="Operator" onChange={this.handleChangeRole}/>{' '}
                    Operator
                </Label>&emsp;
                &emsp;
                <Label check>
                    <Input type="radio" name="radio1" value="Stockist" onChange={this.handleChangeRole}/>{' '}
                    Stockist
                </Label><br></br>
                &emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                {/* <Button onClick={()=>
                    { this.props.createUserHandler(username,password,role)}}>Create</Button> */}
                <Button onClick={this.createUserHandler}>Create</Button>    
                </FormGroup>
                {localStorage.getItem('isUserCreate') ? <Redirect to='/list' /> : null}
                {localStorage.removeItem('isUserCreate')}
                </div>
            </div>
            </AdminPage>
        );
    }
}

export default UserCreate;
