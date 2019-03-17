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
      }
      toggle(){
          this.props.toggleDropDown();
      }
      handleChangeQuantity=(productId, quantity, salePrice, productName)=>{
        this.props.getMultiOrderQuantity(productId, quantity, salePrice, productName);
    }
    render(){
        return(
            <AdminPage>
            <div className="Login-main">
            <div className="Login-new">
                <h1>Create New Order</h1><hr/>
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
                                    <DropdownItem>{<Input type="number"   onChange={(event)=>{this.handleChangeQuantity(productDetails.id, event.target.value, productDetails.salePrice, productDetails.productName)}} placeholder="Enter Quantity"></Input>}</DropdownItem>
                                    <DropdownItem>{<Button onClick={this.handleChangeCreate}>Add</Button>}</DropdownItem>
                                    </>
                                       
                        )})
                    }
                        
            
                    </DropdownMenu>
                </Dropdown>&nbsp;&nbsp;&nbsp;
                <Input type="number"  value={this.props.Quantity} onChange={this.handleChangeQuantity} placeholder="Enter Quantity"></Input>&nbsp;&nbsp;&nbsp;
                <Button  size="lg" onClick={this.handleChangeCreate}>Add</Button>&nbsp;&nbsp;&nbsp;
                <Button  size="lg" onClick={this.handleChangeCreate}>Place Order</Button>      
                {/* <label>Product Name:</label>
                <Input type="text"  value={this.props.productName} onChange={this.handleChangeProductName} placeholder="Enter Product Name"></Input><br/>
                <label>Quantity:</label>
                <Input type="number"  value={this.props.Quantity} onChange={this.handleChangeQuantity} placeholder="Enter Quantity"></Input>
                <Button onClick={this.handleChangeCreate}>Create</Button> */}
            </div>
            </div>
            {localStorage.getItem('isOrder') ? <Redirect to='/listOrder' /> : null}
            {localStorage.removeItem('isOrder')}
            </AdminPage>
        )
    }

}
export default CreateOrderMult;