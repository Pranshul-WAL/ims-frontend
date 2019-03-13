import React,{Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Button,Nav} from 'reactstrap';

class AdminPage extends Component {
    constructor(props){
        super(props);
        this.logoutHandler=this.logoutHandler.bind(this)
    }
    logoutHandler(){
        //localStorage.clear();
        localStorage.removeItem('isLogin');
    }
    render() {
        return (
            <>
            <Nav >

            <div align='center' class="nav-item">
                <h1>Admin Page</h1><hr/>
                <Link to='/enduser'>Users</Link><br/>
                <Link to='/product'>Products</Link><br/>
                <Link to='/login'><Button color="danger" onClick={this.logoutHandler}>Logout</Button></Link>           
            </div>
            </Nav>
            {
                this.props.children
            }
            </>
            
        );
    }
}

export default AdminPage;