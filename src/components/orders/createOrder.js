import React,{Component} from 'react';
import {Button,Input} from 'reactstrap';
import {Redirect} from "react-router-dom";
//import {createNew} from '../api/users';
// import {axiosInstance} from '../api/index';
import AdminPage from '../adminPage';


class OrderCreate extends Component {
    constructor(props){
        super(props);

        this.handleChangeProductName=this.handleChangeProductName.bind(this);
        this.handleChangeQuantity=this.handleChangeQuantity.bind(this);
        this.handleChangeCreate=this.handleChangeCreate.bind(this);
    }
    handleChangeProductName=(e)=>{
        this.props.getProductname(e.target.value);
    }
    

    handleChangeQuantity=(e)=>{
        this.props.getOrderQuantity(e.target.value);
    }
    handleChangeCreate=()=>{
        this.props.createOrder(this.props.productName,this.props.Quantity);
    }
    
    // componentDidMount(){
    //     this.props.createUser();
    // }
    render() {
        return (
            <AdminPage>
            <div className="Login-main">
            <div className="Login-new">
                <h1>Create New Order</h1><hr/>
                <label>Product Name:</label>
                <Input type="text"  value={this.props.productName} onChange={this.handleChangeProductName} placeholder="Enter Product Name"></Input><br/>
                <label>Quantity:</label>
                <Input type="number"  value={this.props.Quantity} onChange={this.handleChangeQuantity} placeholder="Enter Quantity"></Input>
                <Button onClick={this.handleChangeCreate}>Create</Button>
            </div>
            </div>
            {localStorage.getItem('isOrder') ? <Redirect to='/listOrder' /> : null}
            {localStorage.removeItem('isOrder')}
            </AdminPage>
            
        );
    }
}

export default OrderCreate;