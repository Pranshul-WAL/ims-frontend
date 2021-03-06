import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import AdminPage from '../adminPage';
import Paginate from '../pagination'

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
        this.props.fetchUsers();
    }

    render() {
        return (
            <>
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
                                   <th>#</th>
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
                                            <td>{this.props.userDetails.indexOf(userDetails) + 1}</td>
                                            <td>{userDetails.userName}</td>
                                            <td>{userDetails.role === 1 ? 'Admin': (userDetails.role === 2) ? 'Operator' : 'Stockist'}</td>
                                            <td>{userDetails.id===1 ? null :<Button onClick={() => { 
                                                this.deleteHandler(userDetails.id) }}>Delete</Button>}</td>
                                            <td>{userDetails.id===1 ? null :<Link to={`/updateUser/${userDetails.id}`} className="style-link">Update</Link>}</td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </AdminPage>
            <Paginate/>
            </>
        );
    }
}

export default UserList;
