import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
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
<<<<<<< HEAD
                    <Navbar color="dark" light expand="md">
                        <NavbarBrand href="https://www.westagilelabs.com" >WAL</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="Color">
                                <NavLink href="/enduser">Users</NavLink>
=======
                    <Navbar color="dark" light expand="md" >
                        <NavbarBrand href="https://www.westagilelabs.com" color="white">WAL</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="Font-Color">
                                <Link className="nav-link" to="/enduser">Users</Link>
>>>>>>> a00bf24b24008088c138678d316f52ea03199be2
                            </NavItem>
                            <NavItem className="Font-Color">
                                <Link className="nav-link" to="/product">Product</Link>
                            </NavItem>
                            <NavItem className="Font-Color">
                                <Link className="nav-link" to="login"><Button color="danger" onClick={this.logoutHandler}>Logout</Button></Link>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </div>
                {
                    this.props.children? this.props.children:<h1>Hello</h1>
                }
            </>

        );
    }
}

export default AdminPage;