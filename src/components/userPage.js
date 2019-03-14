import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class UserPage extends Component {
   
    render() {
        return (
            <div align='center' >
                <h1 className="user-class">User Page</h1><hr/>
                <Link to='/add' className="user-class">Add Users</Link><br/>
                <Link to='/list' className="user-class">List Users</Link>
                
            </div>
            
        );
    }
}

export default UserPage;