import React,{Component} from 'react';

import {Table} from 'reactstrap';

class UserList extends Component{

    componentDidMount(){
        // (async() => {
        //     let response = await listUser()
        //     console.log(response.data);
        //   })()
        this.props.fetchUsers();
    }
    render(){
        return(
            <div>
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
                        <tr>
                            {this.props.userDetails.map((userDetails)=>{
                                return(
                                    <tr>
                                        <td>{userDetails.username}</td>
                                        <td>{userDetails.password}</td>
                                        <td>{userDetails.role}</td>
                                       
                                    </tr>
                                )
                            }}
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default UserList;
