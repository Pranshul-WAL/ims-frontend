import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import AdminPage from './adminPage';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.deleteHandler = this.deleteHandler.bind(this);
    };
<<<<<<< HEAD
    deleteHandler() {
         this.props.deleteUser(this.props.match.params.userId);
=======
    deleteHandler(userId){
        this.props.deleteUser(userId);
>>>>>>> c6e8ffb1c91372f88e70585800b614c4977c9fa4
    }
    componentDidMount() {

        // (async() => {
        //     let response = await listUser()
        //     console.log(response.data);
        //   })()
        this.props.fetchUsers();
    }

    render() {
        return (
            <AdminPage>
                <div class="row">
                    <div class="col-sm-2">
                    </div>
                    <div class="col-sm-8">
                        <Table dark>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Role</th>
                                    <th>Delete</th>
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.userDetails.map((userDetails) => {
                                    return (
                                        <tr>
                                            <td>{userDetails.userName}</td>
                                            <td>{userDetails.password}</td>
                                            <td>{userDetails.role}</td>
                                            <td><Button onClick={() => { 
                                                this.deleteHandler(userDetails.id) }}>Delete</Button></td>
                                            <td><Link to={`/updateUser/${userDetails.id}`}>Update</Link></td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </AdminPage>
        );
    }
}

export default UserList;
