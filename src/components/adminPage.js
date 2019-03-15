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
  NavLink,
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
                    <Link to="/" className="UserStyle">WEST AGILE LABS</Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
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
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
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
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Orders
                  </DropdownToggle>
                  <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/listOrder">List Orders</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/addOrder">Add Order</Link>
                  </DropdownItem>
                  </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                    <Link className="nav-link" to="login"><Button color="danger" onClick={this.logoutHandler}>Logout</Button></Link>
                    </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
                </div>
                {
                    this.props.children? this.props.children:<div>
                    <h1>Welcome</h1><img src={logo} alt='company logo'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum neque, vestibulum id elit eu, dictum tincidunt lacus. Morbi in mi sit amet felis finibus malesuada eu in ante. Nullam vel tempus massa, a vestibulum mi. Nulla egestas elit a lacus aliquet, sed ultrices nisl suscipit. Nunc ullamcorper condimentum hendrerit. Donec pharetra turpis id consectetur commodo. Pellentesque elementum laoreet mauris et bibendum. Aenean ultricies neque sit amet purus sollicitudin, ut gravida tellus blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

                    Duis nisl purus, facilisis eget urna quis, aliquam aliquet felis. In laoreet malesuada ante, a scelerisque ex eleifend euismod. Integer rhoncus condimentum turpis, sit amet posuere velit facilisis et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget turpis sit amet est vestibulum rhoncus. Nulla finibus pulvinar eros quis laoreet. Etiam venenatis ligula ultricies ex condimentum sodales. Phasellus commodo rhoncus finibus. Nunc id facilisis sapien. Curabitur nec erat quis elit mollis accumsan sit amet at lorem. Nulla viverra est purus, vitae interdum orci bibendum et. Quisque nec lacinia lacus. Curabitur non diam justo.
                    
                    Maecenas viverra condimentum eros non tristique. Nulla cursus tempor risus, ac tincidunt lorem vulputate vitae. Nunc sit amet diam diam. Etiam placerat augue ut quam ultrices, ornare scelerisque purus commodo. Pellentesque rutrum, eros eu consectetur tristique, augue diam posuere arcu, ut ornare ligula orci eget mi. Pellentesque aliquet, leo quis facilisis vulputate, risus tellus blandit ipsum, ut facilisis elit libero posuere nibh. Vestibulum ac consectetur lorem. Vivamus ac aliquam enim. Mauris sem sem, scelerisque eget eleifend et, pharetra non turpis. Cras rutrum ligula fringilla, consequat lectus sollicitudin, convallis purus. Nullam quis semper quam. Praesent imperdiet eros eget tincidunt molestie. Nullam et nisi maximus, rutrum dui vitae, mollis odio. Mauris gravida, ante sed fringilla iaculis, nunc neque semper erat, in suscipit nunc lacus ut lectus. Sed at lectus consequat, ultricies erat vitae, porttitor sapien. </p>
                    </div>
                }
            </>

        );
    }
}

export default AdminPage;