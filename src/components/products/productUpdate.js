import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import { Redirect } from "react-router-dom";
import Swal from 'sweetalert2';
import AdminPage from '../adminPage';

class ProductUpdate extends Component {
    constructor(props) {
        super(props);

        this.handleChangeProductName = this.handleChangeProductName.bind(this);
        this.handleChangeSalePrice = this.handleChangeSalePrice.bind(this);
        this.handleChangeProductDescription = this.handleChangeProductDescription.bind(this);
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
        this.updateProductHandler = this.updateProductHandler.bind(this)
    }
    handleChangeProductName = (e) => {
        this.props.getProductname(e.target.value);
    }
    handleChangeSalePrice = (e) => {
        this.props.getSalePrice(e.target.value);
    }
    handleChangeProductDescription = (e) => {
        this.props.getProductDescription(e.target.value);
    }
    handleChangeQuantity = (e) => {
        this.props.getUpdateQuantity(e.target.value);
    }
    updateProductHandler() {
        if (this.props.productName === "" || this.props.salePrice === "" || this.props.productDescription === "" || this.props.Quantity === "" || this.props.match.params.productId === "") {
            Swal.fire({
                position: 'center',
                type: 'error',
                title: '',
                showConfirmButton: false,
                timer: 1500,

            })
        } else {
            this.props.updateProduct(this.props.productName, this.props.salePrice, this.props.productDescription, this.props.Quantity, this.props.match.params.productId)
        }
    }

    render() {
        return (
            <AdminPage>
                <div className="Login-main">
                    <div className="Login-new">
                        <h1>Update Product</h1><hr />
                        <label>Product Name:</label>
                        <Input type="text" value={this.props.productName} onChange={this.handleChangeProductName} placeholder="Enter Product Name"></Input><br />
                        <label>Sales Price:</label>
                        <Input type="text" value={this.props.salePrice} onChange={this.handleChangeSalePrice} placeholder="Enter Sales Price"></Input>
                        <label>Product Description:</label>
                        <Input type="text" value={this.props.productDescription} onChange={this.handleChangeProductDescription} placeholder="Enter description"></Input>
                        <label>Quantity:</label>
                        <Input type="text" value={this.props.Quantity} onChange={this.handleChangeQuantity} placeholder="Enter Quantity"></Input>
                        <Button onClick={this.updateProductHandler}>Update</Button>
                        {localStorage.getItem('isProductUpdate') ? <Redirect to='/listProduct' /> : null}
                        {localStorage.removeItem('isProductUpdate')}
                    </div>
                </div>
            </AdminPage>
        );
    }
}

export default ProductUpdate;