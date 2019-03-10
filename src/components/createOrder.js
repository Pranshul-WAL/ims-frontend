import React,{Component} from 'react';
import {Button,Input} from 'reactstrap';
//import {createNew} from '../api/users';
import {axiosInstance} from '../api/index';


class OrderCreate extends Component {
    constructor(props){
        super(props);

        this.handleChangeProductName=this.handleChangeProductName.bind(this);
        this.handleChangeProductId=this.handleChangeProductId.bind(this);
        this.handleChangeQuantity=this.handleChangeQuantity.bind(this);
    }
    handleChangeProductName=(e)=>{
        this.props.getProductname(e.target.value);
    }
    
    handleChangeProductId=(e)=>{
        this.props.getProductId(e.target.value);
    }
    handleChangeQuantity=(e)=>{
        this.props.getQuantity(e.target.value);
    }
    createOrder=()=>{
        const axios=axiosInstance();
        return axios({
            method:'post',
            url:'/user/admin/product/add',
            data:{
                productId:this.props.productId,
                productName:this.props.productName,
                Quantity:this.props.Quantity
            }
        })
    }
    // componentDidMount(){
    //     this.props.createUser();
    // }
    render() {
        return (
            <div align="center">
                <h1>Create New Order</h1><hr/>
                <label>Product Name:</label>
                <Input type="text"  value={this.props.input} onChange={this.handleChangeProductName} placeholder="Enter Product Name"></Input><br/>
                <label>Product Id:</label>
                <Input type="text"  value={this.props.input} onChange={this.handleChangeProductId} placeholder="Enter Product Id"></Input>
                <label>Quantity:</label>
                <Input type="text"  value={this.props.input} onChange={this.handleChangeQuantity} placeholder="Enter Quantity"></Input>
                <Button onClick={createOrder()}>Create</Button>
            </div>
        );
    }
}

export default OrderCreate;