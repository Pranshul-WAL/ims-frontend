import React, { Component } from "react";
import { Table } from 'reactstrap';
import AdminPage from './adminPage';
class listOrders extends Component {
    componentDidMount() {
        this.props.fetchOrders()
    }
    render() {
        return (
            <div class="row">
            <div class ="col-sm-2"></div>
            <div class="col-sm-8">
            <Table hover>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Return</th>
                        <th>Placed On</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.orders.map((orders)=> {
                    return(
                        <tr>
                            <td>{orders.orderId}</td>
                            <td>{orders.productId}</td>
                            <td>{orders.productName}</td>
                            <td>{orders.isReturn}</td>
                            <td>{orders.createdAt}</td>
                        </tr>
                    )
                })
            }
                </tbody>
            </Table>
            </div>
            </div>
        );
    }
}

export default listOrders;