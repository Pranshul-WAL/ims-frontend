import React,{Component} from 'react';
import {  DropdownToggle,DropdownMenu, UncontrolledDropdown,DropdownItem ,Input,Button} from 'reactstrap';
import AdminPage from '../adminPage';
import {Redirect} from "react-router-dom";

class Multiple extends Component{
    componentDidMount() {
        this.props.fetchProducts()
    }
    constructor(props) {
        super(props);

        // this.toggle = this.toggle.bind(this);
        this.handleChangeQuantity=this.handleChangeQuantity.bind(this);
        this.handleChangeCreate=this.handleChangeCreate.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
   
      }
    //   toggle(){
    //       this.props.toggleDropDown();
    //   }
      
      handleChangeQuantity=(productId, quantity, salePrice, productName, productQuantity)=>{
        if (quantity > productQuantity || quantity < 0) {
            alert('Enter valid quantity.');
            // this.props.resetQuantity();
        } else {
        this.props.getMultiOrderQuantity(productId, quantity, salePrice, productName);
        }
      }
      handleChangeCreate=()=>{
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
                <UncontrolledDropdown  >
                    <DropdownToggle caret>
                    Products
                    </DropdownToggle>
                    <DropdownMenu >
                        <DropdownItem header>Select Products</DropdownItem>
                         
                         {this.props.productDetails.map((productDetails)=>{
                                 return(
                                   
                                     <DropdownItem>{productDetails.productName}</DropdownItem>
                                 
                                                
                                       
                         )})
                     }
                        
            
                    </DropdownMenu>
                </UncontrolledDropdown>
                </div>
                <Input type="number"   onChange={(event)=>{event.target.value > this.props.productDetails.Quantity ? this.handleQuantity(): this.handleChangeQuantity(this.props.productDetails.id, event.target.value, this.props.productDetails.salePrice, this.props.productDetails.productName, this.props.productDetails.Quantity)}} placeholder="Enter Quantity"></Input>
                <div className="style-right">
                <Button size="lg" onClick={this.handleAdd}>Add Product</Button>
                <Button  size="lg" onClick={this.handleChangeCreate}>Place Order</Button>      
                </div>
            </div>
            </div>
            {JSON.parse(localStorage.getItem('isOrder')) ? <Redirect to='/listOrder' /> : null}
            {localStorage.removeItem('isOrder')}
            </AdminPage>
        )
    }

}
export default Multiple;