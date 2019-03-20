import React,{Component} from 'react';
import {  DropdownToggle,DropdownMenu, UncontrolledDropdown,DropdownItem ,Input,Button} from 'reactstrap';
import AdminPage from '../adminPage';
import {Redirect} from "react-router-dom";
import {Table} from 'reactstrap';

class Multiple extends Component{
    componentDidMount() {
        this.props.fetchProducts()
    }
    constructor(props) {
        super(props);

        // this.toggle = this.toggle.bind(this);
        // this.handleChangeQuantity=this.handleChangeQuantity.bind(this);
        this.handleChangeCreate=this.handleChangeCreate.bind(this);
        // this.handleQuantity = this.handleQuantity.bind(this);
        this.changeText=this.changeText.bind(this);
        this.handleDropdown=this.handleDropdown.bind(this);
        this.handleAdd=this.handleAdd.bind(this);
   
      }
      handleAdd(){
          this.props.addProduct();
      }
      handleDropdown(productId, salePrice, productName){
          this.props.CreateActiveOrder(productId, salePrice, productName)
      }
      changeText(e){
          this.props.handletext(e.target.value)
      }
      handleChangeCreate=()=>{
          this.props.createMultOrder(this.props.newProduct);

      }
    //   handleQuantity = (props) => {
    //       alert('Enter valid qauntity');
    //   }
    render(){
        return(
            <AdminPage>
            <div className="Login-main">
            <div className="Login-new">
                <h1>Create New Order</h1><hr/>
                <div className="style-left">
                <UncontrolledDropdown size="lg" >
                    <DropdownToggle caret> 
                    Products
                    </DropdownToggle>
                    <DropdownMenu >
                        <DropdownItem header>Select Products</DropdownItem>
                         
                         {this.props.productDetails.map((productDetails)=>{
                                 return(
                                   
                                     <DropdownItem onClick={e => {this.handleDropdown(productDetails.id, productDetails.salePrice, productDetails.productName)}}>{productDetails.productName}</DropdownItem>              
                         )})
                     }
                        
            
                    </DropdownMenu>
                </UncontrolledDropdown>
                </div>
                {/* <Input type="number"   onChange={(event)=>{event.target.value > this.props.productDetails.Quantity ? this.handleQuantity(): this.handleChangeQuantity(this.props.productDetails.id, event.target.value, this.props.productDetails.salePrice, this.props.productDetails.productName, this.props.productDetails.Quantity)}} placeholder="Enter Quantity"></Input> */}
                <Input type="number" defaultValue={this.props.inputQuantity} onChange={this.changeText} placeholder="Enter Quantity">Add</Input>
                {this.props.Quantity<= 0 || this.props.inputQuantity > this.props.productDetails.Quantity ? null:<Button size="lg" onClick={this.handleAdd}>Add Product</Button>}
                
                <div className="style-right">
                <Button  size="lg" onClick={this.handleChangeCreate}>Place Order</Button>      
                </div>
            </div>
            </div>
            
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Product Id</th>
                                <th>Product Name</th>
                                <th>Sale Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.newProduct.map((newProduct)=>{
                                            return(
                                                <tr>
                                                    <td>{newProduct.productId}</td>
                                                    <td>{newProduct.productName}</td>
                                                    <td>{newProduct.salePrice}</td>
                                                    <td>{newProduct.Quantity}</td>
                                                </tr>
                                                      
                                    )})
                                }
                        </tbody>
                    </Table> 
                    
                            
                  
            {JSON.parse(localStorage.getItem('isOrder')) ? <Redirect to='/listOrder' /> : null}
            {localStorage.removeItem('isOrder')}
         
            </AdminPage>
        )
    }

}
export default Multiple;