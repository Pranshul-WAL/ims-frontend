import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class UserPage extends Component {
   
    render() {
        return (
            <div align='center'>
                <h1>User Page</h1><hr/>
                <Link to='/add'>Add Users</Link><br/>
                <Link to='/list'>List Users</Link>
                
            </div>
            
        );
    }
}

export default UserPage;