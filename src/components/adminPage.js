import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import first from '../first.jpg';
import second from '../second.jpg';
import third from '../third.jpeg';


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
  DropdownItem,
  UncontrolledCarousel,
} from 'reactstrap';


const items = [
  {
    src: first,
    altText: 'Slide 1',
    
  },
  {
    src: second,
    altText: 'Slide 2',
    
  },
  {
    src: third,
    altText: 'Slide 3',
  }
];
const Example = () => <UncontrolledCarousel items={items} />;
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
    localStorage.clear();
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
                    {JSON.parse(localStorage.getItem("role")) === 3 ? null : <DropdownItem>
                      <Link to="/addProduct">ADD PRODUCTS</Link>
                    </DropdownItem>}
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link to="/listInventory">HISTORY</Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> : null}
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
                      <Link to="/multiple">Add Order</Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link to="/listReturns">List Retuns</Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> : null}
                <NavItem>
                  <Link className="nav-link" to="/login"><Button color="danger" onClick={this.logoutHandler}>Logout</Button></Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        {
          this.props.children ? this.props.children : <div>
          <div className="">{Example()}</div>
          <h1 align='center' className="style-link">Order Products!  Generate Returns!</h1>
                </div>
        }
       
      </>

              );
          }
      }
      
export default AdminPage;