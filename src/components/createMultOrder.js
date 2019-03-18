import React,{Component} from 'react';
import {  DropdownToggle,DropdownMenu, Dropdown,DropdownItem ,Input,Button} from 'reactstrap';
import AdminPage from './adminPage';
import {Redirect} from "react-router-dom";

class CreateOrderMult extends Component{
    componentDidMount() {
        this.props.fetchProducts()
    }
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.handleChangeQuantity=this.handleChangeQuantity.bind(this);
        this.handleChangeCreate=this.handleChangeCreate.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
      }
      toggle(){
          this.props.toggleDropDown();
      }
      
      handleChangeQuantity=(productId, quantity, salePrice, productName, productQuantity)=>{
        if (quantity > productQuantity || quantity < 0) {
            alert('Enter valid quantity.');
            // this.props.resetQuantity();
        } else {
        this.props.getMultiOrderQuantity(productId, quantity, salePrice, productName);
        }
      }
      handleChangeCreate=(products)=>{
          this.props.createMultOrder(this.props.products);

      }
      handleQuantity = (props) => {
          alert('Enter valid qauntity');
          this.props.quantity = 0;
      }
    render(){
        return(
            <AdminPage>
            <div className="Login-main">
            <div className="Login-new">
                <h1>Create New Order</h1><hr/>
                <div className="style-left">
                <Dropdown isOpen={this.props.dropdownOpen} toggle={this.toggle} >
                    <DropdownToggle caret>
                    Products
                    </DropdownToggle>
                    <DropdownMenu >
                        <DropdownItem header>Select Products</DropdownItem>
                        
                        {this.props.productDetails.map((productDetails)=>{
                                return(
                                    <>
                                    <DropdownItem>{productDetails.productName}</DropdownItem>
                                    <DropdownItem>{<Input type="number"   onChange={(event)=>{event.target.value > productDetails.Quantity ? this.handleQuantity(): this.handleChangeQuantity(productDetails.id, event.target.value, productDetails.salePrice, productDetails.productName, productDetails.Quantity)}} placeholder="Enter Quantity"></Input>}</DropdownItem>
                                    </>
                                       
                        )})
                    }
                        
            
                    </DropdownMenu>
                </Dropdown>
                </div>
                <div className="style-right">
                <Button  size="lg" onClick={this.handleChangeCreate}>Place Order</Button>      
                </div>
            </div>
            </div>
            {localStorage.getItem('isOrder') ? <Redirect to='/listOrder' /> : null}
            {localStorage.removeItem('isOrder')}
            </AdminPage>
        )
    }

}
export default CreateOrderMult;