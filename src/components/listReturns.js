import React, { Component } from "react";
import { Table } from 'reactstrap';
import AdminPage from './adminPage';
class ListReturn extends Component {
    componentDidMount() {
        this.props.fetchReturns()
    }
    render() {
        return (
            <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-8">
            <Table hover>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Placed On</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.returns.map((returns) =>{
                        return(
                         <tr>
                            <td>{returns.orderId}</td>
                            <td>{returns.productId}</td>
                            <td>{returns.productName}</td>
                            <td>{returns.quantity}</td>
                            <td>{returns.date}</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
            </div>
            </div>
        );
    }
}

export default ListReturn;