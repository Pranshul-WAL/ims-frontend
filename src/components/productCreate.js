import React,{Component} from 'react';
import {Button,Input} from 'reactstrap';
import {Redirect} from "react-router-dom";
import AdminPage from './adminPage';
import Swal from 'sweetalert2';


class ProductCreate extends Component {
    constructor(props){
        super(props);

        this.handleChangeProductName=this.handleChangeProductName.bind(this);
        this.handleChangeSalePrice=this.handleChangeSalePrice.bind(this);
        this.handleChangeProductDescription=this.handleChangeProductDescription.bind(this);
        this.handleChangeQuantity=this.handleChangeQuantity.bind(this);
        this.createProductHandler = this.createProductHandler.bind(this)
    }
    handleChangeProductName=(e)=>{
        this.props.getProductname(e.target.value);
    }
    handleChangeSalePrice=(e)=>{
        this.props.getSalePrice(e.target.value);
    }
    handleChangeProductDescription=(e)=>{
        this.props.getProductDescription(e.target.value);
    }
    handleChangeQuantity=(e)=>{
        this.props.getProductQuantity(e.target.value);
    }
    createProductHandler(){
        if(this.props.productName===""||this.props.salePrice===""||this.props.productDescription===""||this.props.Quantity===""){
            Swal.fire({
                position: 'center',
                type: 'error',
                title: 'Please Enter the Credentials    ',
                showConfirmButton: false,
                timer: 1500,

              })
        }else{
        this.props.createProduct(this.props.productName,this.props.salePrice,this.props.productDescription,this.props.Quantity)}
    }
    
    render() {
        return (
            <AdminPage>
            <div className="Login-main">
                <div className="Login-new">
                    <h1>Create New Product</h1><hr/> 
                    <label className="d-block text-left">Product Name:</label>
                    <Input type="text"  value={this.props.productName} onChange={this.handleChangeProductName} placeholder="Enter Product Name"></Input><br/>
                    <label>Sales Price:</label>
                    <Input type="number"  value={this.props.salePrice} onChange={this.handleChangeSalePrice} placeholder="Enter Sales Price"></Input>
                    <label>Product Description:</label>
                    <Input type="text"  value={this.props.productDescription} onChange={this.handleChangeProductDescription} placeholder="Enter description"></Input>
                    <label>Quantity:</label>
                    <Input type="number"  value={this.props.Quantity} onChange={this.handleChangeQuantity} placeholder="Enter Quantity"></Input>
                    <Button onClick={this.createProductHandler}>Create</Button>
                    {localStorage.getItem('isProductCreate') ? <Redirect to='/listProduct' /> : null}
                    {localStorage.removeItem('isProductCreate')}
                </div>
            </div>
            </AdminPage>
        );
    }
}

export default ProductCreate;