import React,{Component} from 'react';
import {Button,Input} from 'reactstrap';




class ProductCreate extends Component {
    constructor(props){
        super(props);

        this.handleChangeProductName=this.handleChangeProductName.bind(this);
        this.handleChangeSalePrice=this.handleChangeSalePrice.bind(this);
        this.handleChangeProductDescription=this.handleChangeProductDescription.bind(this);
        this.handleChangeQuantity=this.handleChangeQuantity.bind(this);
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
        this.props.getQuantity(e.target.value);
    }
    createProductHandler(){
        this.props.createProduct(this.props.productName,this.props.salePrice,this.props.productDescription,this.props.Quantity)
    }
    
    render() {
        return (
            <div align="center">
                <h1>Create New User</h1><hr/>
                <label>Product Name:</label>
                <Input type="text"  value={this.props.productName} onChange={this.handleChangeProductName} placeholder="Enter Product Name"></Input><br/>
                <label>Sales Price:</label>
                <Input type="text"  value={this.props.salePrice} onChange={this.handleChangeSalePrice} placeholder="Enter Sales Price"></Input>
                <label>Product Description:</label>
                <Input type="text"  value={this.props.productDescription} onChange={this.handleChangeProductDescription} placeholder="Enter description"></Input>
                <label>Quantity:</label>
                <Input type="text"  value={this.props.Quantity} onChange={this.handleChangeQuantity} placeholder="Enter Quantity"></Input>
                <Button onClick={this.createProductHandler}>Create</Button>
            </div>
        );
    }
}

export default ProductCreate;