import React, { Component } from "react";
import { Table } from 'reactstrap';
import moment from 'moment';
import AdminPage from './adminPage';
class ListOrders extends Component {
    componentDidMount() {
        this.props.fetchOrders()
    }

    render() {
        return (
            <AdminPage>
                <br></br>
                <h1 className="UserStyle user-style"> Orders</h1>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
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
                                {this.props.orders.map((orders) => {
                                    return (

                                        <tr>
                                            <td>{orders.orderId}</td>
                                            <td>{orders.productId}</td>
                                            <td>{orders.productName}</td>
                                            <td>{orders.orderQuantity}</td>
                                            <td>{moment(orders.createdAt).format('DD MMM YYYY')}</td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </AdminPage>
        );
    }
}

export default ListOrders;