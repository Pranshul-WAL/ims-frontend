import React, { Component } from "react";
import { Table } from 'reactstrap';

class listOrders extends Component {
    componentDidMount() {
        this.props.fetchReturns()
    }
    render() {
        return (
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
        );
    }
}

export default listOrders;