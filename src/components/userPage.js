import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class UserPage extends Component {
   
    render() {
        return (
            <div align='center'>
                <h1 className="UserStyle">User Page</h1><hr/>
                <Link to='/add' className="UserStyle">Add Users</Link><br/>
                <Link to='/list' lassName="UserStyle">List Users</Link>
                
            </div>
            
        );
    }
}

export default UserPage;