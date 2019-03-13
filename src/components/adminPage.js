import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
   } from 'reactstrap';


class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.logoutHandler = this.logoutHandler.bind(this)
    }
    logoutHandler() {
        //localStorage.clear();
        localStorage.removeItem('isLogin');
    }
    render() {
        return (
            <>
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">WAL</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/enduser">Users</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/product">Product</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="login"><Button color="danger" onClick={this.logoutHandler}>Logout</Button></NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </div>
                {
                    this.props.children
                }
                <img src={'./logo.jpg'} alt="logo" Cladd/>
                <p>lorem ipsum</p>
            </>

        );
    }
}

export default AdminPage;