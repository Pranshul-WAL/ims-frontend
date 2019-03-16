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
    deleteHandler(userId){
        if (userId === 1) {
            alert('System administrator cannot be deleted')
        } else {
        this.props.deleteUser(userId);
        }
    }
    componentDidMount() {
        console.log(this.props.userDetails.length);
        
        // (async() => {
        //     let response = await listUser()
        //     console.log(response.data);
        //   })()
        this.props.fetchUsers();
    }

    render() {
        return (
            <AdminPage>
            <br></br>
            <h1 className="UserStyle user-style"> Users</h1>
                <div class="row">
                    <div class="col-sm-2">
                    </div>
                    <div class="col-sm-8">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Username</th>
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
                                            <td>{userDetails.role === 1 ? 'Admin': (userDetails.role === 2) ? 'Operator' : 'Stockist'}</td>
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
