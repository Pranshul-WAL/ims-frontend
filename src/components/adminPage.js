import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import logo from '../logo.jpg'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
   } from 'reactstrap';


class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.logoutHandler = this.logoutHandler.bind(this)
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    logoutHandler() {
        //localStorage.clear();
        localStorage.removeItem('isLogin');
    }
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <>
                <div>
                <Navbar color="dark" light expand="md">
                    <NavbarBrand  >
                    <Link to="/" className="style-link">HOME</Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                   {JSON.parse(localStorage.getItem("role")) === 1 ? <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    Users
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem>
                    <Link to="/list">LIST USERS</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/add">ADD USERS</Link>
                  </DropdownItem>
                  </DropdownMenu>
                    </UncontrolledDropdown> : null}
                    {JSON.parse(localStorage.getItem("role")) === 1 || JSON.parse(localStorage.getItem("role")) === 3 ? <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    Products
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem>
                    <Link to="/listProduct">LIST PRODUCTS</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/addProduct">ADD PRODUCTS</Link>
                  </DropdownItem>
                  </DropdownMenu>
                  </UncontrolledDropdown> :null}
                  {JSON.parse(localStorage.getItem("role")) === 1 || JSON.parse(localStorage.getItem("role")) === 2 ? <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Orders
                  </DropdownToggle>
                  <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/Orders">List Orders</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/addOrder">Add Order</Link>
                  </DropdownItem>
                  </DropdownMenu>
                    </UncontrolledDropdown>:null}
                    <NavItem>
                    <Link className="nav-link" to="login"><Button color="danger" onClick={this.logoutHandler}>Logout</Button></Link>
                    </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
                </div>
                {
                    this.props.children? this.props.children:<div>
                    
                    </div>
                }
            </>

        );
    }
}

export default AdminPage;