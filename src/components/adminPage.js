import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class AdminPage extends Component {
   
    render() {
        return (
            <div align='center'>
                <h1>Admin Page</h1><hr/>
                <Link to='/enduser'>Users</Link><br/>
                <Link to='/product'>Products</Link>
            </div>
            
        );
    }
}

export default AdminPage;