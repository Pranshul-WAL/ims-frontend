import React, { Component } from "react";
import { Table } from 'reactstrap';
import AdminPage from '../adminPage';
import moment from 'moment';
import { Link } from 'react-router-dom'
class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrders();
    }
    render() {
        return (
            <AdminPage>
                <br></br>
                <h1 className="UserStyle user-style">Orders</h1>
                <div class="row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-6">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Order Id</th>
                                    <th>User Id</th>
                                    <th>Placed On</th>
                                    <th>List Products</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.orders.map((orders) => {
                                    return (
                                        <tr>
                                            <td>{orders.id}</td>
                                            <td>{orders.userId}</td>
                                            <td>{moment(orders.created).format('DD MMM YYYY')}</td>
                                            <td><Link to={`/listItems/${orders.id}`} className="style-link">Products</Link></td>
                                        </tr>
                                    );
                                }
                                )}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </AdminPage>
        );
    }
}

export default Orders;